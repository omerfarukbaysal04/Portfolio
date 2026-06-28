import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const PROJECT_INTERVAL = 4000;
const SOCIAL_INTERVAL = 2600;

// Featured projects shown in the hero carousel, in this order.
const FEATURED_SLUGS = ['pentez-ai', 'tanilog', 'glide-ball', 'stajio', 'the-watchtower', 'cost-of-redemption'];
const featuredProjects = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(Boolean);

// Cover thumbnail: image media directly, or YouTube thumbnail for videos.
const projectThumb = (p) => {
  if (p.media?.type === 'image') return p.media.src;
  const id = (p.media?.src?.match(/embed\/([^?/]+)/) || [])[1];
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

const socials = [
  { icon: <FaYoutube />, name: 'YouTube', handle: '@baysalsoft', url: 'https://www.youtube.com/@baysalsoft', color: '#FF0000' },
  { icon: <FaTiktok />, name: 'TikTok', handle: '@baysalsoft', url: 'https://www.tiktok.com/@baysalsoft', color: '#ff0050' },
  { icon: <FaInstagram />, name: 'Instagram', handle: '@baysalsoft', url: 'https://www.instagram.com/baysalsoft/', color: '#e1306c' },
  { icon: <FaXTwitter />, name: 'X', handle: '@BaysalSoft', url: 'https://x.com/BaysalSoft', color: '#1d9bf0' },
];

// Auto-rotation that respects reduced-motion, pauses on hover and when the tab is hidden.
const useAutoRotate = (length, interval) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [resetKey, setResetKey] = useState(0); // bump to restart the timer after manual nav
  const reduced = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const active = !hovered && !hidden && !reduced.current;

  useEffect(() => {
    if (!active) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [active, length, interval, resetKey]);

  const nav = (updater) => {
    setIndex(updater);
    setResetKey((k) => k + 1);
  };

  return {
    index,
    active,
    setHovered,
    next: () => nav((i) => (i + 1) % length),
    prev: () => nav((i) => (i - 1 + length) % length),
    goto: (i) => nav(() => i),
  };
};

const ProjectCarousel = () => {
  const { t, tr } = useLanguage();
  const items = featuredProjects;
  const { index, active, setHovered, next, prev } = useAutoRotate(items.length, PROJECT_INTERVAL);
  const p = items[index];
  const thumb = projectThumb(p);

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="hero-carousel-frame">
        <Link to={`/projects/${p.slug}`} className="hero-carousel-card" key={p.slug}>
          <div className="hero-carousel-media">
            {thumb ? <img src={thumb} alt={p.title} /> : <div className="hero-carousel-noimg" />}
            <span className="hero-carousel-badge">{t.projects.categories[p.category]}</span>
          </div>
          <div className="hero-carousel-info">
            <h3 className="hero-carousel-title">{p.title}</h3>
            <p className="hero-carousel-desc">{tr(p.tagline)}</p>
            <div className="hero-carousel-tags">
              {p.tech.slice(0, 3).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </Link>

        <button type="button" className="hero-carousel-nav prev" onClick={prev} aria-label="Previous project">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button type="button" className="hero-carousel-nav next" onClick={next} aria-label="Next project">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      <div className="hero-carousel-bar">
        <div className="hero-carousel-progress">
          <span
            key={index}
            className="hero-carousel-progress-fill"
            style={{ animationDuration: `${PROJECT_INTERVAL}ms`, animationPlayState: active ? 'running' : 'paused' }}
          />
        </div>
        <span className="hero-carousel-counter">{index + 1}/{items.length}</span>
      </div>
    </div>
  );
};

const SocialRotator = () => {
  const { index, setHovered, goto } = useAutoRotate(socials.length, SOCIAL_INTERVAL);
  const s = socials[index];

  return (
    <div
      className="hero-social"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-social-card"
        key={s.name}
        style={{ '--social-color': s.color }}
      >
        <span className="hero-social-icon">{s.icon}</span>
        <div className="hero-social-meta">
          <span className="hero-social-name">{s.name}</span>
          <span className="hero-social-handle">{s.handle}</span>
        </div>
        <svg className="hero-social-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </a>
      <div className="hero-dots">
        {socials.map((soc, i) => (
          <button
            key={soc.name}
            type="button"
            className={i === index ? 'active' : ''}
            onClick={() => goto(i)}
            aria-label={soc.name}
          />
        ))}
      </div>
    </div>
  );
};

const HeroShowcase = () => (
  <div className="hero-showcase">
    <ProjectCarousel />
    <SocialRotator />
  </div>
);

export default HeroShowcase;
