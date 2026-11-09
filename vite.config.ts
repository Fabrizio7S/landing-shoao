import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { GET as getVideos } from './api/videos'
import { POST as postVistas } from './api/vistas'

const staticGuides = (): Plugin => {
  const rewrite = (req: { url?: string }, _res: unknown, next: () => void) => {
    if (req.url && /^\/guias\/[^/?#]+\/(\?.*)?$/.test(req.url)) {
      req.url = req.url.replace(/\/(\?.*)?$/, '/index.html$1')
    }
    next()
  }
  return {
    name: 'static-guides',
    configureServer: (server) => { server.middlewares.use(rewrite) },
    configurePreviewServer: (server) => { server.middlewares.use(rewrite) },
  }
}

// En Vercel, /api/videos y /api/vistas son funciones serverless (carpeta api/).
// En local (npm run dev / preview) este plugin ejecuta esas mismas funciones.
const localApi = (): Plugin => {
  const send = async (res: ServerResponse, response: Response) => {
    res.statusCode = response.status
    response.headers.forEach((value, key) => res.setHeader(key, value))
    res.end(await response.text())
  }
  const readBody = (req: IncomingMessage) =>
    new Promise<string>((resolve, reject) => {
      let body = ''
      req.setEncoding('utf8')
      req.on('data', (chunk: string) => (body += chunk))
      req.on('end', () => resolve(body))
      req.on('error', reject)
    })
  const handler = async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    if (req.url?.startsWith('/api/videos')) return send(res, await getVideos())
    if (req.url?.startsWith('/api/vistas')) {
      if (req.method !== 'POST') {
        res.statusCode = 405
        return res.end()
      }
      const request = new Request('http://localhost/api/vistas', { method: 'POST', body: await readBody(req) })
      return send(res, await postVistas(request))
    }
    next()
  }
  return {
    name: 'local-api',
    configureServer: (server) => { server.middlewares.use(handler) },
    configurePreviewServer: (server) => { server.middlewares.use(handler) },
  }
}

export default defineConfig({
  plugins: [localApi(), staticGuides(), react(), tailwindcss()],
})
