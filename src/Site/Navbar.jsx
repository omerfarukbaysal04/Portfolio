import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

const sections = ['about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const isHome = location.pathname === '/' || location.pathname === '/projects';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHome) return;
      // Detect active section
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const goToTop = () => {
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button type="button" className="nav-logo" onClick={goToTop} aria-label="Back to top">
          <img src="/logo.png" alt="Logo" />
          <span className="nav-logo-text">ÖMER FARUK BAYSAL</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={isHome && activeSection === item ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item)}
              >
                {t.nav[item]}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-resume-btn" href="/cv.pdf" download="OmerFarukBaysal_CV.pdf">
              {t.nav.resume}
            </a>
          </li>
          <li>
            <LanguageToggle />
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
