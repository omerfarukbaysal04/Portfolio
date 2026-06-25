import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';
import { MailIcon } from '../components/AnimatedSVGs';
import { useLanguage } from '../i18n/LanguageContext';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/omerfarukbaysal04', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/baysal/', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@baysalsoft', label: 'YouTube' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/omerfarukkbaysal/', label: 'Instagram' },
  { icon: <FaTwitter />, href: 'https://x.com/BaysalSoft', label: 'X / Twitter' },
  { icon: <SiItchdotio />, href: 'https://baysalgames.itch.io', label: 'itch.io' },
];

const Contact = () => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    window.location.href = 'mailto:baysalomerfaruk54@gmail.com';
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="glass-card contact-wrapper reveal">
          <h2 className="contact-title">
            {t.contact.pre} <span className="gradient-text">{t.contact.hi}</span>
          </h2>
          <p className="contact-desc">
            {t.contact.desc}
          </p>

          <button className="contact-btn" onClick={handleContactClick}>
            <MailIcon />
            {t.contact.button}
          </button>

          <div className="contact-socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
