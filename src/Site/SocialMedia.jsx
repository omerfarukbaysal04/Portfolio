import { useState, useRef, useEffect } from 'react';
import { FaXTwitter, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';

// Recent YouTube videos (newest first). Refresh from:
// https://www.youtube.com/feeds/videos.xml?channel_id=UCgHK1rZFe-g4HZGNm4PqsTg
const ytVideos = [
  { id: 'sVnTnisPzuA', title: '10 Dolara Dünyayı Kurtaran Adam | WannaCry' },
  { id: 'Kc81XQr9DAc', title: 'AI PENTEST TOOL - VEHICLE LOCKDOWN ATTACK' },
  { id: 'TrZ-o8HLp4Q', title: 'Stajio: Tüm stajlar tek bir yerde!' },
  { id: 'ex7Gkg-O8vI', title: 'The Watchtower' },
  { id: 'hBPBLx1Q0lg', title: 'Unity ile Sıfırdan Öğrenip Yaptığım Oyunlar' },
  { id: 'tW3ahjArIHI', title: 'Glide Ball' },
];

const accounts = {
  youtube: { icon: <FaYoutube />, name: 'YouTube', handle: '@baysalsoft', url: 'https://www.youtube.com/@baysalsoft', color: '#FF0000' },
  x: { icon: <FaXTwitter />, name: 'X', handle: '@BaysalSoft', url: 'https://x.com/BaysalSoft', color: '#1d9bf0', image: '/x.png' },
  tiktok: { icon: <FaTiktok />, name: 'TikTok', handle: '@baysalsoft', url: 'https://www.tiktok.com/@baysalsoft', color: '#ff0050' },
  instagram: { icon: <FaInstagram />, name: 'Instagram', handle: '@baysalsoft', url: 'https://www.instagram.com/baysalsoft/', color: '#e1306c', image: '/instagram.png' },
};

const loadScript = (src) =>
  new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = resolve;
    document.body.appendChild(s);
  });

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

// TikTok: official creator embed, loaded when scrolled into view.
const TikTokEmbed = ({ account }) => {
  const [ref, inView] = useInView();
  const boxRef = useRef(null);

  useEffect(() => {
    if (!inView || !boxRef.current) return;
    const el = boxRef.current;
    el.innerHTML = `<blockquote class="tiktok-embed" cite="${account.url}" data-unique-id="${account.handle.replace('@', '')}" data-embed-type="creator" style="max-width:780px;min-width:288px;"><section></section></blockquote>`;
    loadScript('https://www.tiktok.com/embed.js');
  }, [inView, account]);

  return (
    <div className="social-embed-wrap" ref={ref}>
      {inView ? (
        <div className="social-embed-scroll" ref={boxRef} />
      ) : (
        <div className="social-embed-loading" style={{ color: account.color }}>
          {account.icon}
        </div>
      )}
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

        <div className="social-grid reveal">
          <SocialCard account={accounts.youtube}>
            <YouTubeEmbed />
          </SocialCard>

          <SocialCard account={accounts.tiktok}>
            <TikTokEmbed account={accounts.tiktok} />
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
