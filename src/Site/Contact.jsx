import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';
import { MailIcon } from '../components/AnimatedSVGs';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/omerfarukbaysal04', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/baysal/', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@baysalsoft', label: 'YouTube' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/omerfarukkbaysal/', label: 'Instagram' },
  { icon: <FaTwitter />, href: 'https://x.com/BaysalSoft', label: 'X / Twitter' },
  { icon: <SiItchdotio />, href: 'https://baysalgames.itch.io', label: 'itch.io' },
];

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:baysalomerfaruk54@gmail.com';
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="glass-card contact-wrapper reveal">
          <h2 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-desc">
            If you are interested in my work or would like to get in touch about anything, feel free to reach out. I'd love to hear from you!
          </p>

          <button className="contact-btn" onClick={handleContactClick}>
            <MailIcon />
            Contact Me
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
