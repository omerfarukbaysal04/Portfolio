import React from 'react';
import { AboutFrame } from '../components/AnimatedSVGs';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-text">
            <h2 className="section-title">
              {a.pre} {a.hi && <span className="gradient-text">{a.hi}</span>}
            </h2>
            <p className="about-paragraph">{a.p1}</p>
            <p className="about-paragraph">
              {a.p2a}
              <a href="https://play.google.com/store/apps/details?id=com.BaysalGames.Bally" target="_blank" rel="noopener noreferrer">
                {a.p2LinkGooglePlay}
              </a>
              {a.p2b}
              <a href="https://baysalgames.itch.io" target="_blank" rel="noopener noreferrer">
                {a.p2LinkItch}
              </a>
              {a.p2c}
            </p>
            <p className="about-paragraph">{a.p3}</p>
          </div>

          <div className="about-image">
            <div className="about-image-border"></div>
            <div className="about-image-inner">
              <img src="/me.jpg" alt="Ömer Faruk Baysal" />
              <AboutFrame />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
