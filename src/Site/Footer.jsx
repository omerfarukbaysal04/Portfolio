import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/omerfarukbaysal04' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/baysal/' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@omerfarukkbaysal' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/omerfarukkbaysal/' },
  { icon: <FaTwitter />, href: 'https://x.com/BaysalSoft' },
  { icon: <SiItchdotio />, href: 'https://baysalgames.itch.io' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Ömer Faruk Baysal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
