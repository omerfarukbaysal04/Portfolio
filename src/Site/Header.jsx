import React, { useState, useEffect, useRef } from 'react';
import { HeroDecoRings, DownloadIcon } from '../components/AnimatedSVGs';

const roles = ['Cybersecurity Enthusiast', 'Game Developer'];

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const statCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="11" x2="10" y2="11" />
        <line x1="8" y1="9" x2="8" y2="13" />
        <line x1="15" y1="12" x2="15.01" y2="12" />
        <line x1="18" y1="10" x2="18.01" y2="10" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </svg>
    ),
    value: 4,
    suffix: '+',
    label: 'Games Published',
    color: '#a855f7',
    delay: 0,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: 5,
    suffix: '+',
    label: 'Security Tools',
    color: '#00d4aa',
    delay: 0.15,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
    value: null,
    suffix: '',
    label: 'Computer Engineering Student',
    sublabel: 'Pamukkale University',
    color: '#6c63ff',
    delay: 0.3,
  },
];

const StatCard = ({ card }) => {
  const { count, ref } = useCountUp(card.value || 0, 1800);

  return (
    <div
      ref={ref}
      className="hero-stat-card"
      style={{
        '--card-color': card.color,
        animationDelay: `${card.delay}s`,
      }}
    >
      <div className="hero-stat-icon" style={{ color: card.color }}>
        {card.icon}
      </div>
      <div className="hero-stat-info">
        {card.value !== null ? (
          <span className="hero-stat-value">{count}{card.suffix}</span>
        ) : (
          <span className="hero-stat-value" style={{ fontSize: '1.3rem' }}>🎓</span>
        )}
        <span className="hero-stat-label">{card.label}</span>
        {card.sublabel && (
          <span className="hero-stat-sublabel">{card.sublabel}</span>
        )}
      </div>
    </div>
  );
};

const Header = () => {
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
  }, [displayText, isDeleting, roleIndex]);

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <HeroDecoRings />
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
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
            Computer Engineering student at Pamukkale University, passionate about building cybersecurity tools and immersive game experiences.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/cv.pdf" className="btn-secondary" download="OmerFarukBaysal_CV.pdf">
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-stats-wrapper">
          {statCards.map((card, index) => (
            <StatCard key={index} card={card} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

