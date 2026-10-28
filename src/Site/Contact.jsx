import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaGraduationCap, FaShieldHalved, FaGamepad } from 'react-icons/fa6';
import { SiItchdotio } from 'react-icons/si';
import { ArrowIcon, MailIcon } from '../components/AnimatedSVGs';
import { useLanguage } from '../i18n/LanguageContext';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/omerfarukbaysal04', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/baysal/', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@omerfarukbaysall', label: 'YouTube' },
  { icon: <FaTwitter />, href: 'https://x.com/BaysalSoft', label: 'X / Twitter' },
  { icon: <SiItchdotio />, href: 'https://baysalgames.itch.io', label: 'itch.io' },
];

const factIcons = [<FaGraduationCap key="edu" />, <FaShieldHalved key="sec" />, <FaGamepad key="game" />];

// "Who am I?" — a short summary of the About page; the navbar's About link scrolls here.
const WhoAmI = () => {
  const { t } = useLanguage();
  const w = t.whoami;

  return (
    <div id="whoami" className="glass-card whoami-card reveal">
      <div className="whoami-head">
        <img className="whoami-avatar" src="/me.jpg" alt="Ömer Faruk Baysal" loading="lazy" />
        <div>
          <h2 className="contact-title">
            {w.pre} <span className="gradient-text">{w.hi}</span>
          </h2>
          <p className="whoami-role">{w.role}</p>
        </div>
      </div>

      <p className="contact-desc">{w.summary}</p>

      <ul className="whoami-facts">
        {w.facts.map((fact, i) => (
          <li key={fact}>
            <span className="whoami-fact-icon" aria-hidden="true">{factIcons[i]}</span>
            {fact}
          </li>
        ))}
      </ul>

      <Link to="/about" className="project-cta whoami-more">
        {w.more}
        <ArrowIcon />
      </Link>
    </div>
  );
};

const EMAIL = 'baysalomerfaruk54@gmail.com';

// Netlify Forms: submissions are POSTed to "/" and collected by Netlify. The
// matching static form in index.html lets Netlify detect the fields at deploy
// time. Only works on the deployed site, not on the local dev server.
const ContactForm = () => {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form name="contact" className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot: hidden from people, bots that fill it get dropped by Netlify */}
      <p hidden>
        <label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="contact-form-row">
        <label className="contact-field">
          {f.name}
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="contact-field">
          {f.email}
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <label className="contact-field">
        {f.message}
        <textarea name="message" rows={4} required />
      </label>

      <button type="submit" className="contact-btn" disabled={status === 'sending'}>
        <MailIcon />
        {status === 'sending' ? f.sending : f.send}
      </button>

      {(status === 'success' || status === 'error') && (
        <p className={`contact-form-status is-${status}`} role="status">
          {f[status]}
        </p>
      )}
    </form>
  );
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-row">
        <WhoAmI />

        <div className="glass-card contact-wrapper reveal">
          <h2 className="contact-title">
            {t.contact.pre} <span className="gradient-text">{t.contact.hi}</span>
          </h2>
          <p className="contact-desc">{t.contact.desc}</p>

          <ContactForm />

          <p className="contact-email">
            {t.contact.orEmail} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          {/* Social links with the CV download right after them */}
          <div className="contact-footer">
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
