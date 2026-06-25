import React from 'react';
import { AboutFrame } from '../components/AnimatedSVGs';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-text">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-paragraph">
              I'm a Computer Engineering student at Pamukkale University with a strong focus on cybersecurity. I'm actively improving my skills through courses and hands-on projects, with interests in networking, incident analysis, and penetration testing.
            </p>
            <p className="about-paragraph">
              Beyond security, I also enjoy developing games with Unity. So far, I've created four personal games, and one of them is published on the{' '}
              <a href="https://play.google.com/store/apps/details?id=com.BaysalGames.Bally" target="_blank" rel="noopener noreferrer">
                Google Play Store
              </a>. I've also built two personal websites and publish my games on{' '}
              <a href="https://baysalgames.itch.io" target="_blank" rel="noopener noreferrer">
                itch.io
              </a>.
            </p>
            <p className="about-paragraph">
              My goal is to build a career in cybersecurity, combining continuous learning with practical experience, while also pursuing creative projects that fuel my passion for technology.
            </p>
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
