import { Link } from 'react-router-dom';
import { HeroDecoRings } from '../components/AnimatedSVGs';
import HeroStage from '../components/HeroStage';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <HeroDecoRings />
      </div>

      <div className="container">
        {/* Horizontal intro: name on the left, pitch + actions on the right */}
        <div className="hero-intro">
          <div className="hero-intro-main">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">
              Ömer Faruk <span className="gradient-text">Baysal</span>
            </h1>
          </div>

          <div className="hero-intro-side">
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                {t.hero.viewProjects}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <Link to="/about" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                </svg>
                {t.nav.about}
              </Link>
            </div>
          </div>
        </div>

        <HeroStage />
      </div>
    </header>
  );
};

export default Header;
