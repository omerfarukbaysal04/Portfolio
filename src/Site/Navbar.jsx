import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

// Home-page sections are scrolled to; other items are separate routes.
const navItems = [
  { key: 'projects', section: 'projects' },
  { key: 'about', to: '/about' },
  { key: 'contact', section: 'contact' },
];
const homeSections = navItems.filter((i) => i.section).map((i) => i.section);

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
      let current = '';
      for (const id of homeSections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      }
      setActiveSection(current);
    };

    handleScroll();
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

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const isActive = (item) =>
    item.to ? location.pathname === item.to : isHome && activeSection === item.section;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button type="button" className="nav-logo" onClick={goToTop} aria-label="Back to top">
          <img src="/logo.png" alt="Logo" />
          <span className="nav-logo-text">ÖMER FARUK BAYSAL</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.key}>
              {item.to ? (
                <Link
                  to={item.to}
                  className={isActive(item) ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              ) : (
                <a
                  href={`#${item.section}`}
                  className={isActive(item) ? 'active' : ''}
                  onClick={(e) => handleSectionClick(e, item.section)}
                >
                  {t.nav[item.key]}
                </a>
              )}
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
