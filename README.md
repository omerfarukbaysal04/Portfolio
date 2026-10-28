# Ömer Faruk Baysal — Portfolio

Personal portfolio site: projects in cybersecurity, game development and web, with an English/Turkish UI and dark/light themes.

Live: https://omerfarukbaysal.netlify.app

## Stack

React 19, Vite 6, React Router 7, react-icons. Plain CSS (no framework). Deployed on Netlify (`public/_redirects` handles SPA routing).

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run lint
```

## Structure

```
src/
  pages/        Home, AboutPage, ProjectDetail (/projects/:slug)
  Site/         Page sections: Navbar, Header (hero), Projects, About, Contact, Footer
  components/   Sliders, theme/language toggles, preloader, particles, etc.
  data/
    projects.js     All projects — each entry gets a card and a detail page
    highlights.js   "What I do" slides in the hero
  i18n/         LanguageContext + UI strings (translations.js)
  index.css     Design tokens (colors, spacing) for dark/light themes
  styles.css    Component styles
public/         Images, CV and other static files
```

## Adding a project

Append an object to `projects` in `src/data/projects.js` (the comment at the top of that file lists the fields). Translatable fields use `{ en, tr }`. To show it in the featured slider, add its slug to `featuredSlugs`.
