import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { projects } from './src/data/projects.js'

const SITE_URL = 'https://omerfarukbaysal.netlify.app'

// Writes dist/sitemap.xml on build from the project list, so new projects
// are included automatically.
const sitemap = () => ({
  name: 'sitemap',
  apply: 'build',
  generateBundle() {
    const paths = ['/', '/about', ...projects.map((p) => `/projects/${p.slug}`)]
    const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemap()],
})
