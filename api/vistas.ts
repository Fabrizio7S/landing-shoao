/**
 * /api/vistas — contador de cada guía: visitas totales y personas viéndola ahora.
 * Lo usa la barra de las guías (public/guias/_comun/barra-shoao.js).
 *
 * POST (escribir) — cada pestaña con la guía abierta, cada 60 s:
 *   { guia: "mayrin", sesion: "<id al azar de esa pestaña>", nueva: true }
 *     → suma una visita (si nueva es true) y marca esa pestaña como "viendo".
 *   { guia: "mayrin", sesion: "...", salir: true }
 *     → la pestaña se cerró: deja de contarla.
 * GET /api/vistas?guia=mayrin (leer) — cada 15 s mientras la guía está en pantalla.
 *     La respuesta se guarda 10 s en la caché de Vercel y la comparten todos los
 *     visitantes, así que leer cuesta lo mismo con 5 personas que con 500.
 * Ambos responden { visitas, viendo }.
 *
 * "Viendo ahora" = pestañas abiertas que avisaron en los últimos 150 s
 * (los navegadores retrasan los avisos de pestañas en segundo plano hasta ~1 min).
 * Las versiones en español e inglés de una guía cuentan juntas.
 *
 * Datos guardados en Upstash Redis (Vercel → Storage → Upstash for Redis).
 * Sin base de datos: en local (npm run dev) se guarda en memoria para probar;
 * en Vercel responde 503 y la guía simplemente no muestra el contador.
 */

const VIENDO_MS = 150_000;
const GUIA = /^[a-z0-9-]{1,40}$/;
const SESION = /^[A-Za-z0-9-]{8,64}$/;

/**
 * Claves de Upstash. Vercel las crea con el prefijo elegido al conectar la base
 * de datos (KV_REST_API_URL, STORAGE_REST_API_URL, UPSTASH_REDIS_REST_URL...),
 * así que se busca cualquier variable que termine en REST_API_URL / REST_URL
 * y su TOKEN correspondiente (no el de solo lectura).
 */
function clavesRedis(): { url?: string; token?: string } {
  const env = process.env;
  for (const nombre of Object.keys(env).sort()) {
    const m = nombre.match(/^(.*?)(REST_API_URL|REDIS_REST_URL)$/);
    if (!m || !env[nombre]?.startsWith("https://")) continue;
    const token = env[m[1] + m[2].replace("URL", "TOKEN")];
    if (token) return { url: env[nombre], token };
  }
  return {};
}
const { url: REDIS_URL, token: REDIS_TOKEN } = clavesRedis();

interface Peticion {
  guia?: unknown;
  sesion?: unknown;
  nueva?: unknown;
  salir?: unknown;
}

interface Contador {
  visitas: number;
  viendo: number;
}

const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

// ---------- Con Upstash Redis (producción) ----------

async function redis(comandos: (string | number)[][]): Promise<unknown[]> {
  const res = await fetch(`${REDIS_URL}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    body: JSON.stringify(comandos),
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  const datos = (await res.json()) as { result?: unknown; error?: string }[];
  return datos.map((d) => {
    if (d.error) throw new Error(d.error);
    return d.result;
  });
}

async function contarRedis(guia: string, sesion: string, nueva: boolean, salir: boolean): Promise<Contador> {
  const visitasKey = `vistas:${guia}`;
  const viendoKey = `viendo:${guia}`;
  const ahora = Date.now();
  const r = await redis([
    nueva ? ["INCR", visitasKey] : ["GET", visitasKey],
    salir ? ["ZREM", viendoKey, sesion] : ["ZADD", viendoKey, ahora, sesion],
    ["ZREMRANGEBYSCORE", viendoKey, 0, ahora - VIENDO_MS],
    ["ZCARD", viendoKey],
    ["EXPIRE", viendoKey, 600],
  ]);
  return { visitas: Number(r[0] ?? 0), viendo: Number(r[3] ?? 0) };
}

async function leerRedis(guia: string): Promise<Contador> {
  const r = await redis([
    ["GET", `vistas:${guia}`],
    ["ZCOUNT", `viendo:${guia}`, Date.now() - VIENDO_MS, "+inf"],
  ]);
  return { visitas: Number(r[0] ?? 0), viendo: Number(r[1] ?? 0) };
}

// ---------- Sin base de datos (solo para probar en local) ----------

const memoria = new Map<string, { visitas: number; viendo: Map<string, number> }>();

function contarMemoria(guia: string, sesion: string, nueva: boolean, salir: boolean): Contador {
  let g = memoria.get(guia);
  if (!g) memoria.set(guia, (g = { visitas: 0, viendo: new Map() }));
  const ahora = Date.now();
  if (nueva) g.visitas++;
  if (salir) g.viendo.delete(sesion);
  else g.viendo.set(sesion, ahora);
  for (const [s, t] of g.viendo) if (t < ahora - VIENDO_MS) g.viendo.delete(s);
  return { visitas: g.visitas, viendo: g.viendo.size };
}

function leerMemoria(guia: string): Contador {
  const g = memoria.get(guia);
  if (!g) return { visitas: 0, viendo: 0 };
  const limite = Date.now() - VIENDO_MS;
  let viendo = 0;
  for (const t of g.viendo.values()) if (t >= limite) viendo++;
  return { visitas: g.visitas, viendo };
}

// ---------- Handlers ----------

export async function GET(request: Request): Promise<Response> {
  const guia = new URL(request.url).searchParams.get("guia") ?? "";
  if (!GUIA.test(guia)) return json({ error: "Petición inválida" }, 400);
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      return Response.json(await leerRedis(guia), {
        // Caché compartida en Vercel (CDN) 10 s; el navegador no la guarda.
        headers: { "Cache-Control": "public, max-age=0, s-maxage=10, stale-while-revalidate=5" },
      });
    } catch {
      return json({ error: "No se pudo leer el contador" }, 502);
    }
  }
  if (process.env.VERCEL) {
    return json({ error: "Falta conectar la base de datos (Upstash Redis)" }, 503);
  }
  return json(leerMemoria(guia));
}


export async function POST(request: Request): Promise<Response> {
  let datos: Peticion;
  try {
    // navigator.sendBeacon manda el JSON como texto, por eso se lee como texto.
    datos = JSON.parse(await request.text()) as Peticion;
  } catch {
    return json({ error: "Petición inválida" }, 400);
  }
  const { guia, sesion } = datos;
  if (typeof guia !== "string" || !GUIA.test(guia) || typeof sesion !== "string" || !SESION.test(sesion)) {
    return json({ error: "Petición inválida" }, 400);
  }
  const nueva = datos.nueva === true;
  const salir = datos.salir === true;

  if (REDIS_URL && REDIS_TOKEN) {
    try {
      return json(await contarRedis(guia, sesion, nueva, salir));
    } catch {
      return json({ error: "No se pudo guardar la visita" }, 502);
    }
  }
  if (process.env.VERCEL) {
    return json({ error: "Falta conectar la base de datos (Upstash Redis)" }, 503);
  }
  return json(contarMemoria(guia, sesion, nueva, salir));
}
