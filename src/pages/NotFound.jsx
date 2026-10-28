import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { usePageMeta } from '../components/usePageMeta';

// Shown for unknown URLs, and (with project-specific text) for unknown project slugs.
const NotFound = ({ pre, hi, text }) => {
  const { t } = useLanguage();
  const n = t.notFound;
  usePageMeta({ title: `${pre ?? n.titlePre} ${hi ?? n.titleHi}` });

  return (
    <section className="section project-detail">
      <div className="container">
        <div className="glass-card project-detail-notfound">
          <h1 className="section-title">
            {pre ?? n.titlePre} <span className="gradient-text">{hi ?? n.titleHi}</span>
          </h1>
          <p>{text ?? n.text}</p>
          <Link to="/" className="btn-primary">{n.backHome}</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
