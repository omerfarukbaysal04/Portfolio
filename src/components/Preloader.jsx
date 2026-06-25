import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let hideTimer;

    const dismiss = () => {
      setFadeOut(true);
      hideTimer = setTimeout(() => setVisible(false), 400);
    };

    // Keep a short minimum so the logo doesn't flash, but tie dismissal
    // to the real page load instead of a fixed 1.5s delay.
    const minDelay = setTimeout(() => {
      if (document.readyState === 'complete') {
        dismiss();
      } else {
        window.addEventListener('load', dismiss, { once: true });
      }
    }, 400);

    return () => {
      clearTimeout(minDelay);
      clearTimeout(hideTimer);
      window.removeEventListener('load', dismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src="/logo.png" alt="Logo" className="preloader-logo" />
        <div className="preloader-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
