import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { ServerResponse } from 'node:http'
import { GET as getVideos } from './api/videos'

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

// En Vercel, /api/videos es una función serverless (api/videos.ts).
// En local (npm run dev / preview) este plugin ejecuta esa misma función.
const localApi = (): Plugin => {
  const handler = async (req: { url?: string }, res: ServerResponse, next: () => void) => {
    if (!req.url?.startsWith('/api/videos')) return next()
    const response = await getVideos()
    res.statusCode = response.status
    response.headers.forEach((value, key) => res.setHeader(key, value))
    res.end(await response.text())
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
