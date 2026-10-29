import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { projects, getProjectThumb } from './src/data/projects.js'
import { translations } from './src/i18n/translations.js'
import { labTopics, LABS_COVER } from './src/data/labs.js'

const SITE_URL = 'https://omerfarukbaysal.netlify.app'
const NAME = 'Ömer Faruk Baysal'

// Writes dist/sitemap.xml on build from the project list, so new projects
// are included automatically.
const sitemap = () => ({
  name: 'sitemap',
  apply: 'build',
  generateBundle() {
    const paths = [
      '/',
      '/about',
      ...projects.map((p) => `/projects/${p.slug}`),
      '/labs',
      ...labTopics.map((topic) => `/labs/${topic.slug}`),
    ]
    const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
  },
})

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Link previews (LinkedIn, WhatsApp, X…) don't run JavaScript, so they only see
// the meta tags in the HTML file itself. This writes a copy of index.html for
// /about, /labs, every /labs/<topic> and every /projects/<slug> with that page's title, description, URL
// and image filled in. Netlify serves about.html at /about before falling back
// to the SPA redirect; the React app then takes over as usual.
const pageMeta = () => ({
  name: 'page-meta',
  apply: 'build',
  writeBundle(options, bundle) {
    const template = bundle['index.html'].source.toString()
      // The Netlify form definition must stay in index.html only
      .replace(/\s*<!-- Static copy of the React contact form[\s\S]*?<\/form>/, '')

    const pages = [
      {
        file: 'about.html',
        path: '/about',
        title: `${translations.en.nav.about} | ${NAME}`,
        description: translations.en.whoami.summary,
      },
      // Written twice: /labs sits next to the labs/ folder of topic pages, so
      // either file may be the one Netlify serves for it
      ...['labs.html', 'labs/index.html'].map((file) => ({
        file,
        path: '/labs',
        title: `${translations.en.labs.title} | ${NAME}`,
        description: translations.en.labs.intro,
        image: SITE_URL + LABS_COVER,
      })),
      ...labTopics.map((topic) => ({
        file: `labs/${topic.slug}.html`,
        path: `/labs/${topic.slug}`,
        title: `${topic.title} Labs | ${NAME}`,
        description: topic.desc.en,
        image: SITE_URL + LABS_COVER,
      })),
      ...projects.map((p) => {
        const thumb = getProjectThumb(p, 'large')
        return {
          file: `projects/${p.slug}.html`,
          path: `/projects/${p.slug}`,
          title: `${p.title} | ${NAME}`,
          description: p.tagline.en,
          // LinkedIn doesn't render WebP previews, so those keep the default og.png
          image: thumb && !thumb.endsWith('.webp') ? new URL(thumb, SITE_URL).href : null,
        }
      }),
    ]

    for (const page of pages) {
      const title = escapeHtml(page.title)
      const description = escapeHtml(page.description)
      const url = SITE_URL + page.path
      let html = template
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${title}`)
        .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${description}`)
        .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
        .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
      if (page.image) {
        html = html
          .replace(/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*/g, `$1${page.image}`)
          // The default size tags describe og.png, not the project image
          .replace(/\s*<meta property="og:image:(?:width|height)"[^>]*>/g, '')
      }

      const out = path.join(options.dir, page.file)
      fs.mkdirSync(path.dirname(out), { recursive: true })
      fs.writeFileSync(out, html)
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemap(), pageMeta()],
})
