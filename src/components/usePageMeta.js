import { useEffect } from 'react';

export const SITE_URL = 'https://omerfarukbaysal.netlify.app';
const NAME = 'Ömer Faruk Baysal';

const setAttr = (selector, attr, value) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

// Per-page <title>, description and canonical URL. The site is a SPA, so
// index.html only carries the defaults; each page overrides them here.
//   title        page name ("PENTEZ-AI") — omitted for the home page
//   description  meta description for search results / link previews
//   path         canonical path ("/projects/pentez-ai"); omit it for pages that
//                shouldn't be indexed (e.g. 404) — they get a noindex tag
export const usePageMeta = ({ title, description, path }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${NAME}` : `${NAME} | Portfolio`;
    document.title = fullTitle;
    setAttr('meta[property="og:title"]', 'content', fullTitle);
    setAttr('meta[name="twitter:title"]', 'content', fullTitle);

    if (description) {
      setAttr('meta[name="description"]', 'content', description);
      setAttr('meta[property="og:description"]', 'content', description);
      setAttr('meta[name="twitter:description"]', 'content', description);
    }

    if (path) {
      setAttr('link[rel="canonical"]', 'href', SITE_URL + path);
      setAttr('meta[property="og:url"]', 'content', SITE_URL + path);
      return undefined;
    }

    // No canonical path → keep this page out of search results.
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [title, description, path]);
};
