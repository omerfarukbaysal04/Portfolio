import { useState, useEffect } from 'react';
import { HeroDecoRings, DownloadIcon } from '../components/AnimatedSVGs';
import HeroShowcase from '../components/HeroShowcase';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Reset the typing animation when the language (and thus the roles) changes.
  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setRoleIndex(0);
  }, [roles]);

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <HeroDecoRings />
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">
            Ömer Faruk<br />
            <span className="gradient-text">Baysal</span>
          </h1>

          <div className="hero-roles">
            <span>{'< '}</span>
            <span className="hero-role-text">{displayText}</span>
            <span>{' />'}</span>
          </div>

          <p className="hero-description">
            {t.hero.description}
          </p>

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
            <a href="/cv.pdf" className="btn-secondary" download="OmerFarukBaysal_CV.pdf">
              <DownloadIcon />
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </header>
  );
};

export default Header;
