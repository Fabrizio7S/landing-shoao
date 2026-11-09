/**
 * POST /api/vistas — contador de cada guía: visitas totales y personas viéndola ahora.
 *
 * Lo llama la barra de las guías (public/guias/_comun/barra-shoao.js):
 *   { guia: "mayrin", sesion: "<id al azar de esa pestaña>", nueva: true }
 *     → suma una visita (si nueva es true) y marca esa pestaña como "viendo".
 *       La barra lo repite cada 30 s mientras la guía está abierta y visible.
 *   { guia: "mayrin", sesion: "...", salir: true }
 *     → la pestaña se cerró o se ocultó: deja de contarla como "viendo".
 * Responde { visitas, viendo }.
 *
 * "Viendo ahora" = pestañas que avisaron en los últimos 75 s.
 * Las versiones en español e inglés de una guía cuentan juntas.
 *
 * Datos guardados en Upstash Redis (Vercel → Storage → Upstash for Redis).
 * Vercel crea solas las variables KV_REST_API_URL y KV_REST_API_TOKEN
 * (o UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN) al conectarla.
 * Sin base de datos: en local (npm run dev) se guarda en memoria para probar;
 * en Vercel responde 503 y la guía simplemente no muestra el contador.
 */

const VIENDO_MS = 75_000;
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

// ---------- Handler ----------

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
