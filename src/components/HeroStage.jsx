import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldHalved, FaBrain, FaCode, FaGamepad } from 'react-icons/fa6';
import { highlights } from '../data/highlights';
import { projects, getProjectThumb } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const INTERVAL = 6000;
const icons = { shield: FaShieldHalved, brain: FaBrain, code: FaCode, gamepad: FaGamepad };
const findProject = (slug) => projects.find((p) => p.slug === slug);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Auto-rotating focus-area slides (stacked; the active one comes forward).
// Pauses on hover and when the user prefers reduced motion.
const HeroStage = () => {
  const { tr } = useLanguage();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reduced = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
  const active = !hovered && !reduced.current;

  useEffect(() => {
    if (!active) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % highlights.length), INTERVAL);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div
      className="hero-stage-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="hero-stage">
        {highlights.map((h, i) => {
          const Icon = icons[h.icon];
          const isActive = i === index;
          return (
            <article key={h.icon} className={`hero-slide${isActive ? ' is-active' : ''}`} aria-hidden={!isActive}>
              <span className="hero-slide-ghost" aria-hidden="true"><Icon /></span>
              <div className="hero-slide-info">
                <h3 className="hero-slide-title">{tr(h.title)}</h3>
                <p className="hero-slide-desc">{tr(h.desc)}</p>
                <ul className="hero-slide-bullets">
                  {tr(h.bullets).map((b) => (
                    <li key={b}><CheckIcon />{b}</li>
                  ))}
                </ul>
              </div>
              <div className="hero-slide-projects" style={{ '--cols': h.projects.length }}>
                {h.projects.map(findProject).filter(Boolean).map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="hero-mini-card" tabIndex={isActive ? 0 : -1}>
                    <span className="hero-mini-thumb">
                      <img src={getProjectThumb(p)} alt="" loading="lazy" />
                    </span>
                    <span className="hero-mini-body">
                      <span className="hero-mini-title">{p.title}</span>
                      <span className="hero-mini-desc">{tr(p.tagline)}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HeroStage;
