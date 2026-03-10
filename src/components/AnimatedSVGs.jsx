import React from 'react';

// Decorative SVG rings for Hero section
export const HeroDecoRings = () => (
  <svg
    style={{
      position: 'absolute',
      top: '10%',
      right: '-5%',
      width: '500px',
      height: '500px',
      opacity: 0.1,
      pointerEvents: 'none',
    }}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="250" r="200" fill="none" stroke="#6c63ff" strokeWidth="0.5">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 250 250;360 250 250"
        dur="60s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="250" r="180" fill="none" stroke="#00d4aa" strokeWidth="0.3" strokeDasharray="10 20">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 250 250;0 250 250"
        dur="45s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="250" r="150" fill="none" stroke="#ff6b9d" strokeWidth="0.4" strokeDasharray="5 15">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 250 250;360 250 250"
        dur="30s"
        repeatCount="indefinite"
      />
    </circle>
    {/* Orbiting dots */}
    <circle cx="250" cy="50" r="4" fill="#6c63ff" opacity="0.6">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 250 250;360 250 250"
        dur="20s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="70" r="3" fill="#00d4aa" opacity="0.5">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 250 250;0 250 250"
        dur="25s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="250" cy="100" r="2" fill="#ff6b9d" opacity="0.4">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 250 250;360 250 250"
        dur="15s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// About section frame SVG
export const AboutFrame = () => (
  <svg
    style={{
      position: 'absolute',
      inset: '-8px',
      width: 'calc(100% + 16px)',
      height: 'calc(100% + 16px)',
      pointerEvents: 'none',
    }}
    viewBox="0 0 400 460"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2" y="2" width="396" height="456"
      rx="22" ry="22"
      fill="none"
      stroke="url(#aboutGrad)"
      strokeWidth="1.5"
      strokeDasharray="800"
      strokeDashoffset="800"
      opacity="0.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="800;0"
        dur="2s"
        fill="freeze"
        begin="0.5s"
      />
    </rect>
    <defs>
      <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6c63ff" />
        <stop offset="50%" stopColor="#00d4aa" />
        <stop offset="100%" stopColor="#ff6b9d" />
      </linearGradient>
    </defs>
  </svg>
);

// Arrow icon for project links
export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Mail icon for contact
export const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Download icon
export const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Scroll-reveal hook
export const useScrollReveal = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
