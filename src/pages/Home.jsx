import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Site/Header';
import Projects from '../Site/Projects';
import Contact from '../Site/Contact';
import { useScrollReveal } from '../components/AnimatedSVGs';
import { usePageMeta } from '../components/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const location = useLocation();
  const { t } = useLanguage();
  useScrollReveal();
  // /projects renders this same page, so both canonicalize to "/".
  usePageMeta({ description: t.hero.description, path: '/' });

  // When navigating here with a target section — either via router state
  // (e.g. clicking "Contact" in the navbar from another page) or via the
  // /projects URL — scroll to that section.
  useEffect(() => {
    const target = location.state?.scrollTo
      || (location.pathname === '/projects' ? 'projects' : null);
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
