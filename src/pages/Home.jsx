import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Site/Header';
import Projects from '../Site/Projects';
import Contact from '../Site/Contact';
import { useScrollReveal } from '../components/AnimatedSVGs';
import { usePageMeta } from '../components/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';
import { categories, categoryPath } from '../data/projects';

const Home = () => {
  const location = useLocation();
  const { t } = useLanguage();
  useScrollReveal();
  // /projects renders this same page and canonicalizes to "/"; each tab URL
  // (/projects-web …) is its own page with the category name as title.
  const tab = categories.find((key) => location.pathname === categoryPath(key));
  usePageMeta(tab
    ? { title: t.projects.categories[tab], description: t.hero.description, path: categoryPath(tab) }
    : { description: t.hero.description, path: '/' });

  // When navigating here with a target section — either via router state
  // (e.g. clicking "Contact" in the navbar from another page) or via a
  // /projects URL — scroll to that section. Switching tabs (keepScroll) stays put.
  useEffect(() => {
    if (location.state?.keepScroll) return;
    const target = location.state?.scrollTo
      || (location.pathname.startsWith('/projects') ? 'projects' : null);
    if (target) {
      // Wait a tick so the sections are rendered before scrolling.
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
