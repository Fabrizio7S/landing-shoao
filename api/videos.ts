/**
 * GET /api/videos — últimos videos del canal de YouTube de Shoao.
 *
 * Solo videos normales: SIN Shorts y SIN streams. Sin API key ni dependencias.
 *
 * 1. Fuente principal: la pestaña "Vídeos" del canal
 *    (youtube.com/channel/<id>/videos). Es la misma lista que se ve en YouTube,
 *    que ya separa los Shorts y los directos en sus propias pestañas.
 * 2. Respaldo: el feed RSS de la lista "UULF" del canal (solo videos largos).
 *    El RSS de YouTube falla a menudo (404/500, a veces durante horas), por eso
 *    no es la fuente principal.
 * Si las dos fallan responde 502 y la página muestra los videos de respaldo
 * (src/data/videos.ts).
 *
 * Vercel guarda la respuesta 1 h en su CDN y la sirve vieja hasta 24 h mientras
 * la renueva, así casi nunca se llama a YouTube en directo.
 */

import https from "node:https";

const CHANNEL_ID = "UCse5VRlLIzOAFBMgoLYF62w";
const VIDEOS_TAB_URL = `https://www.youtube.com/channel/${CHANNEL_ID}/videos`;
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${CHANNEL_ID.slice(2)}`;
const MAX_VIDEOS = 12;
const TIMEOUT_MS = 4000;
const HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
  "accept-language": "es-ES,es;q=0.9",
  // Evita la página de "Antes de ir a YouTube" (consentimiento de cookies).
  cookie: "SOCS=CAI",
};

export interface FeedVideo {
  id: string;
  title: string;
  /** Fecha ISO (solo cuando viene del RSS). */
  publishedAt: string | null;
  thumbnail: string;
}

const VIDEO_ID = /^[\w-]{11}$/;
const thumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/**
 * Descarga con una conexión NUEVA cada vez (agent: false). Con fetch() Node
 * reutiliza la conexión y YouTube responde siempre desde el mismo servidor;
 * si ese servidor da error, todos los reintentos fallan. Devuelve null si falla.
 */
function descargar(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const req = https.get(url, { agent: false, timeout: TIMEOUT_MS, headers: HEADERS }, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve(null);
      }
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk: string) => (body += chunk));
      res.on("end", () => resolve(body));
      res.on("error", () => resolve(null));
    });
    req.on("timeout", () => req.destroy());
    req.on("error", () => resolve(null));
  });
}

async function conReintentos(
  intentos: number,
  url: string,
  parse: (body: string) => FeedVideo[],
): Promise<FeedVideo[]> {
  for (let i = 0; i < intentos; i++) {
    const body = await descargar(url);
    try {
      const videos = body ? parse(body).slice(0, MAX_VIDEOS) : [];
      if (videos.length) return videos;
    } catch {
      // YouTube cambió el formato o devolvió otra página: siguiente intento
    }
  }
  return [];
}

// ---------- 1. Pestaña "Vídeos" del canal ----------

interface Lockup {
  contentId?: string;
  contentType?: string;
  metadata?: { lockupMetadataViewModel?: { title?: { content?: string } } };
}

export function parseVideosTab(html: string): FeedVideo[] {
  const json = html.match(/var ytInitialData = (\{.*?\});<\/script>/s)?.[1];
  if (!json) return [];
  const found: FeedVideo[] = [];
  const seen = new Set<string>();
  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    const lockup = (node as { lockupViewModel?: Lockup }).lockupViewModel;
    if (lockup?.contentType === "LOCKUP_CONTENT_TYPE_VIDEO" && lockup.contentId) {
      const id = lockup.contentId;
      const title = lockup.metadata?.lockupMetadataViewModel?.title?.content;
      if (VIDEO_ID.test(id) && title && !seen.has(id)) {
        seen.add(id);
        found.push({ id, title, publishedAt: null, thumbnail: thumbnail(id) });
      }
      return;
    }
    for (const value of Object.values(node)) walk(value);
  };
  walk(JSON.parse(json));
  return found;
}

// ---------- 2. Feed RSS (respaldo) ----------

const decode = (s: string) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const tag = (xml: string, name: string) =>
  xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1].trim() ?? "";

export function parseFeed(xml: string): FeedVideo[] {
  return xml
    .split("<entry>")
    .slice(1)
    // Por si acaso: YouTube enlaza los Shorts como /shorts/ID.
    .filter((entry) => !entry.includes('href="https://www.youtube.com/shorts/'))
    .map((entry) => {
      const id = tag(entry, "yt:videoId");
      return {
        id,
        title: decode(tag(entry, "title")),
        publishedAt: tag(entry, "published") || null,
        thumbnail: thumbnail(id),
      };
    })
    .filter((v) => VIDEO_ID.test(v.id))
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

// ---------- Handler ----------

export async function GET(): Promise<Response> {
  let source = "youtube";
  let videos = await conReintentos(3, VIDEOS_TAB_URL, parseVideosTab);
  if (!videos.length) {
    source = "rss";
    videos = await conReintentos(4, FEED_URL, parseFeed);
  }
  if (videos.length) {
    return Response.json(
      { source, videos },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } },
    );
  }
  return Response.json(
    { error: "No se pudo leer el canal de YouTube", videos: [] },
    { status: 502, headers: { "Cache-Control": "no-store" } },
  );
}
