import { useState, useRef, useEffect } from 'react';
import { FaXTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';
// Auto-refreshed at build time by scripts/fetch-youtube.mjs (newest videos first).
import ytVideos from '../data/youtube.json';

// Follower/subscriber counts (update as they grow).
const stats = [
  { key: 'youtube', icon: <FaYoutube />, color: '#FF0000', value: 17, suffix: '', labelKey: 'subscribers', url: 'https://www.youtube.com/@omerfarukbaysall' },
  { key: 'linkedin', icon: <FaLinkedin />, color: '#0a66c2', value: 1297, suffix: '', labelKey: 'followers', url: 'https://www.linkedin.com/in/baysal/' },
  { key: 'instagram', icon: <FaInstagram />, color: '#e1306c', value: 41, suffix: '', labelKey: 'followers', url: 'https://www.instagram.com/baysalsoft/' },
  { key: 'x', icon: <FaXTwitter />, color: '#1d9bf0', value: 7, suffix: '', labelKey: 'followers', url: 'https://x.com/BaysalSoft' },
];

const accounts = {
  youtube: { icon: <FaYoutube />, name: 'YouTube', handle: '@omerfarukbaysall', url: 'https://www.youtube.com/@omerfarukbaysall', color: '#FF0000' },
  linkedin: { icon: <FaLinkedin />, name: 'LinkedIn', handle: 'in/baysal', url: 'https://www.linkedin.com/in/baysal/', color: '#0a66c2', image: '/linkedin.png' },
  instagram: { icon: <FaInstagram />, name: 'Instagram', handle: '@baysalsoft', url: 'https://www.instagram.com/baysalsoft/', color: '#e1306c', image: '/instagram.png' },
  x: { icon: <FaXTwitter />, name: 'X', handle: '@BaysalSoft', url: 'https://x.com/BaysalSoft', color: '#1d9bf0', image: '/x.png' },
};

// Reusable "load when scrolled into view" hook.
const useInView = (rootMargin = '300px') => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return [ref, inView];
};

// YouTube: a player plus a strip of recent videos (channel-like, fully reliable).
const YouTubeEmbed = () => {
  const [ref, inView] = useInView();
  const [current, setCurrent] = useState(ytVideos[0].id);
  const [picked, setPicked] = useState(false);

  const src = `https://www.youtube.com/embed/${current}${picked ? '?autoplay=1' : ''}`;

  return (
    <div className="yt-embed" ref={ref}>
      <div className="yt-player">
        {inView ? (
          <iframe
            src={src}
            title="YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="social-embed-loading" style={{ color: '#FF0000' }}>
            <FaYoutube />
          </div>
        )}
      </div>
      <div className="yt-thumbs">
        {ytVideos.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`yt-thumb${v.id === current ? ' active' : ''}`}
            onClick={() => {
              setCurrent(v.id);
              setPicked(true);
            }}
            title={v.title}
            aria-label={v.title}
          >
            <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};

// X / Instagram: profile screenshot card (live embeds are unreliable/blocked).
const ImageEmbed = ({ account }) => (
  <a
    href={account.url}
    target="_blank"
    rel="noopener noreferrer"
    className="social-img-card"
    aria-label={account.name}
  >
    <img src={account.image} alt={`${account.name} — ${account.handle}`} loading="lazy" />
  </a>
);

const formatCount = (n) =>
  n >= 10000 ? (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K' : n.toLocaleString('en-US');

// Animated count-up follower/subscriber tile.
const StatItem = ({ item, inView }) => {
  const { t } = useLanguage();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * item.value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, item.value]);

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="social-stat" style={{ '--social-color': item.color }}>
      <span className="social-stat-icon">{item.icon}</span>
      <span className="social-stat-value">{formatCount(n)}{item.suffix}</span>
      <span className="social-stat-label">{t.social.counts[item.labelKey]}</span>
    </a>
  );
};

const SocialStats = () => {
  const [ref, inView] = useInView('0px');
  return (
    <div className="social-stats reveal" ref={ref}>
      {stats.map((s) => (
        <StatItem key={s.key} item={s} inView={inView} />
      ))}
    </div>
  );
};

const SocialCard = ({ account, children }) => {
  const { t } = useLanguage();
  return (
    <div className="glass-card social-card" style={{ '--social-color': account.color }}>
      <div className="social-card-head">
        <span className="social-card-icon">{account.icon}</span>
        <div className="social-card-meta">
          <span className="social-card-name">{account.name}</span>
          <a href={account.url} target="_blank" rel="noopener noreferrer" className="social-card-handle">
            {account.handle}
          </a>
        </div>
        <a
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card-open"
          aria-label={`${t.social.openProfile} — ${account.name}`}
          title={t.social.openProfile}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
      <div className="social-card-body">{children}</div>
    </div>
  );
};

const SocialMedia = () => {
  const { t } = useLanguage();

  return (
    <section id="social" className="section social-section">
      <div className="container">
        <div className="social-header reveal">
          <h2 className="section-title">
            {t.social.pre} <span className="gradient-text">{t.social.hi}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.social.subtitle}
          </p>
        </div>

        <SocialStats />

        <div className="social-grid reveal">
          <SocialCard account={accounts.youtube}>
            <YouTubeEmbed />
          </SocialCard>

          <SocialCard account={accounts.linkedin}>
            <ImageEmbed account={accounts.linkedin} />
          </SocialCard>

          <SocialCard account={accounts.instagram}>
            <ImageEmbed account={accounts.instagram} />
          </SocialCard>

          <SocialCard account={accounts.x}>
            <ImageEmbed account={accounts.x} />
          </SocialCard>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
