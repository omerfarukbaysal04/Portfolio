import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Site/Header';
import About from '../Site/About';
import Skills from '../Site/Skills';
import Projects from '../Site/Projects';
import Contact from '../Site/Contact';
import { useScrollReveal } from '../components/AnimatedSVGs';

const Home = () => {
  const location = useLocation();
  useScrollReveal();

  // When navigating here with a target section — either via router state
  // (e.g. clicking "About" in the navbar from a project page) or via the
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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
