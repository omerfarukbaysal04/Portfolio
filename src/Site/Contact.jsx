import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiItchdotio } from 'react-icons/si';
import { MailIcon } from '../components/AnimatedSVGs';
import { useLanguage } from '../i18n/LanguageContext';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/omerfarukbaysal04', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/baysal/', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@omerfarukbaysall', label: 'YouTube' },
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
          <div className="contact-text">
            <h2 className="contact-title">
              {t.contact.pre} <span className="gradient-text">{t.contact.hi}</span>
            </h2>
            <p className="contact-desc">{t.contact.desc}</p>

            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
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

          <div className="contact-actions">
            <button type="button" className="contact-btn" onClick={handleContactClick}>
              <MailIcon />
              {t.contact.button}
            </button>
            <a className="btn-secondary contact-cv" href="/cv.pdf" download="OmerFarukBaysal_CV.pdf">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.contact.cv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
