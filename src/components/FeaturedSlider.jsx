import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './AnimatedSVGs';
import { projects, featuredSlugs, getProjectThumb } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const INTERVAL = 6000;
const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean);
const pad = (n) => String(n).padStart(2, '0');

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points={dir === 'prev' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
  </svg>
);

// Wide, auto-rotating slider of the featured projects.
const FeaturedSlider = () => {
  const { t, tr } = useLanguage();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [resetKey, setResetKey] = useState(0); // restart the timer after manual navigation
  const reduced = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
  const active = !hovered && !reduced.current;

  useEffect(() => {
    if (!active) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % featured.length), INTERVAL);
    return () => clearInterval(id);
  }, [active, resetKey]);

  const goTo = (i) => {
    setIndex((i + featured.length) % featured.length);
    setResetKey((k) => k + 1);
  };

  return (
    <div
      className="featured reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="featured-stage">
        {featured.map((p, i) => {
          const isActive = i === index;
          const thumb = getProjectThumb(p, 'large');
          const link = p.links?.[0];
          return (
            <article key={p.slug} className={`featured-slide${isActive ? ' is-active' : ''}`} aria-hidden={!isActive}>
              <Link to={`/projects/${p.slug}`} className="featured-media" tabIndex={isActive ? 0 : -1} aria-label={p.title}>
                {thumb && <img className="featured-media-fill" src={thumb} alt="" aria-hidden="true" />}
                {thumb && <img className="featured-media-img" src={thumb} alt={p.title} loading={i === 0 ? 'eager' : 'lazy'} />}
              </Link>

              <div className="featured-body">
                <div className="featured-meta">
                  <span className="featured-badge">{t.projects.categories[p.category]}</span>
                  <span className="featured-count">{pad(i + 1)} / {pad(featured.length)}</span>
                </div>
                <h3 className="featured-title">{p.title}</h3>
                <p className="featured-desc">{tr(p.tagline)}</p>
                <div className="project-tags">
                  {p.tech.slice(0, 5).map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="featured-actions">
                  <Link to={`/projects/${p.slug}`} className="btn-primary" tabIndex={isActive ? 0 : -1}>
                    {t.projects.viewDetails}
                    <ArrowIcon />
                  </Link>
                  {link && (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" tabIndex={isActive ? 0 : -1}>
                      {tr(link.label)}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="featured-controls">
        <button type="button" className="featured-arrow" onClick={() => goTo(index - 1)} aria-label={t.projects.prev}>
          <Chevron dir="prev" />
        </button>
        <div className="hero-stage-dots">
          {featured.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              className={`hero-stage-dot${i === index ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={p.title}
            >
              {i === index && (
                <span
                  key={`${index}-${resetKey}`}
                  className="hero-stage-dot-fill"
                  style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: active ? 'running' : 'paused' }}
                />
              )}
            </button>
          ))}
        </div>
        <button type="button" className="featured-arrow" onClick={() => goTo(index + 1)} aria-label={t.projects.next}>
          <Chevron dir="next" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedSlider;
