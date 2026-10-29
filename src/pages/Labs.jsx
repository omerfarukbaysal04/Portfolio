import { Link, useParams, useSearchParams } from 'react-router-dom';
import { labTopics, reportCount, LABS_URL } from '../data/labs';
import { ArrowIcon, useScrollReveal } from '../components/AnimatedSVGs';
import { usePageMeta } from '../components/usePageMeta';
import { useLanguage } from '../i18n/LanguageContext';
import NotFound from './NotFound';

const BackLink = ({ to, children }) => (
  <Link to={to} className="project-detail-back">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
    {children}
  </Link>
);

const RiskBadge = ({ risk, cvss }) => {
  const { t } = useLanguage();
  return (
    <span className={`lab-risk lab-risk--${risk}`}>
      {t.labs.risk[risk]}
      {cvss && <span className="lab-risk-score">{cvss}</span>}
    </span>
  );
};

// /labs — intro and one card per topic.
export const LabsHome = () => {
  const { t, tr } = useLanguage();
  const l = t.labs;
  useScrollReveal();
  usePageMeta({ title: l.title, description: l.intro, path: '/labs' });

  const stats = [
    { value: reportCount, label: l.stats.reports },
    { value: labTopics.length, label: l.stats.topics },
    { value: 'PortSwigger', label: l.stats.source },
  ];

  return (
    <section className="section project-detail labs-page">
      <div className="container">
        <BackLink to="/projects">{t.detail.back}</BackLink>

        <header className="labs-hero reveal">
          <div>
            <h1 className="project-detail-title">
              {l.titlePre} <span className="gradient-text">{l.titleHi}</span>
            </h1>
            <p className="project-detail-tagline">{l.intro}</p>
            <p className="labs-note">
              {l.note}{' '}
              <a href={LABS_URL} target="_blank" rel="noopener noreferrer">PortSwigger Web Security Academy</a>
            </p>
          </div>

          <div className="labs-stats">
            {stats.map((s) => (
              <div key={s.label} className="labs-stat glass-card">
                <span className="labs-stat-value">{s.value}</span>
                <span className="labs-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        <h2 className="project-detail-section-title reveal">{l.topics}</h2>
        <div className="labs-grid">
          {labTopics.map((topic, i) => (
            <Link
              key={topic.slug}
              to={`/labs/${topic.slug}`}
              className="lab-topic glass-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="lab-topic-head">
                <h3 className="lab-topic-title">{topic.title}</h3>
                {topic.cwe && <span className="project-tag">{topic.cwe}</span>}
              </div>
              <p className="lab-topic-desc">{tr(topic.desc)}</p>
              <span className="project-cta">
                {topic.reports.length} {topic.reports.length === 1 ? l.report : l.reports}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component so its usePageMeta call isn't conditional.
const TopicMeta = ({ topic }) => {
  const { tr } = useLanguage();
  usePageMeta({ title: `${topic.title} Labs`, description: tr(topic.desc), path: `/labs/${topic.slug}` });
  return null;
};

const fileName = (path) => path.split('/').pop().replace(/\.pdf$/, '');

// /labs/<slug> — the topic's reports with an inline PDF viewer. The selected
// report is kept in ?report=<file name> so it can be linked directly.
export const LabTopic = () => {
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const { t, tr } = useLanguage();
  const l = t.labs;

  const topic = labTopics.find((tp) => tp.slug === slug);
  if (!topic) {
    return <NotFound pre={l.notFoundPre} hi={l.notFoundHi} text={l.notFoundText} />;
  }

  const report = topic.reports.find((r) => fileName(r.file) === params.get('report')) || topic.reports[0];
  const select = (r) => {
    setParams({ report: fileName(r.file) }, { replace: true });
    // Single-column layout: the viewer is below the list, bring it into view
    if (window.matchMedia('(max-width: 900px)').matches) {
      document.querySelector('.lab-viewer')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section project-detail labs-page">
      <TopicMeta topic={topic} />
      <div className="container">
        <BackLink to="/labs">{l.allTopics}</BackLink>

        <nav className="project-categories lab-topic-tabs" aria-label={l.topics}>
          {labTopics.map((tp) => (
            <Link key={tp.slug} to={`/labs/${tp.slug}`} className={`category-btn${tp.slug === slug ? ' active' : ''}`}>
              {tp.title}
            </Link>
          ))}
        </nav>

        <header className="lab-topic-header">
          <h1 className="project-detail-title">{topic.title}</h1>
          <p className="project-detail-tagline">{tr(topic.desc)}</p>
        </header>

        <div className="lab-viewer-layout">
          <ul className="lab-report-list">
            {topic.reports.map((r) => (
              <li key={r.file}>
                <button
                  type="button"
                  className={`lab-report glass-card${r === report ? ' active' : ''}`}
                  aria-current={r === report}
                  onClick={() => select(r)}
                >
                  <span className="lab-report-title">{r.title}</span>
                  <RiskBadge risk={r.risk} cvss={r.cvss} />
                </button>
              </li>
            ))}
          </ul>

          <div className="lab-viewer glass-card">
            <div className="lab-viewer-bar">
              <span className="lab-viewer-title">{report.title}</span>
              <div className="lab-viewer-actions">
                <a href={report.file} target="_blank" rel="noopener noreferrer" className="btn-secondary">{l.openTab}</a>
                <a href={report.file} download className="btn-secondary">{l.download}</a>
              </div>
            </div>
            {/* Browsers' built-in PDF viewer. Phones mostly can't show PDFs in a
                frame, so small screens get the open-in-tab prompt instead. */}
            <iframe key={report.file} className="lab-viewer-frame" src={`${report.file}#view=FitH`} title={report.title} />
            <div className="lab-viewer-mobile">
              <p>{l.mobileHint}</p>
              <a href={report.file} target="_blank" rel="noopener noreferrer" className="btn-primary">{l.openTab}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
