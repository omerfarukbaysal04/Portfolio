import React, { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button type="button" className="nav-logo" onClick={scrollToTop} aria-label="Back to top">
          <img src="/logo.png" alt="Logo" />
          <span className="nav-logo-text">ÖMER FARUK BAYSAL</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-resume-btn" href="/cv.pdf" download="OmerFarukBaysal_CV.pdf">
              Resume
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
