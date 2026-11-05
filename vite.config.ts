import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Las guías estáticas viven en public/guias/<boss>/index.html.
// Vercel sirve ese index.html al pedir /guias/<boss>/, pero el servidor de
// Vite (dev/preview) devuelve la app de React. Este plugin replica a Vercel.
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [staticGuides(), react(), tailwindcss()],
})
