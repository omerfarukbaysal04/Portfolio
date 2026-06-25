import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { useScrollReveal } from '../components/AnimatedSVGs';
import { useLanguage } from '../i18n/LanguageContext';
import LazyVideo from '../components/LazyVideo';

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <section className="section project-detail">
      <div className="container">
        <div className="glass-card project-detail-notfound">
          <h1 className="section-title">
            {t.detail.notFoundTitlePre} <span className="gradient-text">{t.detail.notFoundTitleHi}</span>
          </h1>
          <p>{t.detail.notFoundText}</p>
          <Link to="/" className="btn-primary">{t.detail.backHome}</Link>
        </div>
      </div>
    </section>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { t, tr } = useLanguage();
  useScrollReveal();

  if (!project) return <NotFound />;

  const { title, media, tech, links, year, category } = project;
  const tagline = tr(project.tagline);
  const overview = tr(project.overview) || tagline;
  const features = tr(project.features) || [];
  const role = tr(project.role);
  const status = tr(project.status);

  const meta = [
    category && { label: t.detail.meta.category, value: t.projects.categories[category] },
    role && { label: t.detail.meta.role, value: role },
    status && { label: t.detail.meta.status, value: status },
    year && { label: t.detail.meta.year, value: year },
  ].filter(Boolean);

  return (
    <section className="section project-detail">
      <div className="container">
        <Link to="/projects" className="project-detail-back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {t.detail.back}
        </Link>

        <div className="project-detail-header reveal">
          <h1 className="project-detail-title">{title}</h1>
          <p className="project-detail-tagline">{tagline}</p>

          <div className="project-tags">
            {tech.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>

          {links?.length > 0 && (
            <div className="project-detail-links">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 0 ? 'btn-primary' : 'btn-secondary'}
                >
                  {tr(link.label)}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="project-detail-media glass-card reveal">
          {media?.type === 'video' ? (
            <LazyVideo src={media.src} title={title} />
          ) : media?.type === 'image' ? (
            <img src={media.src} alt={title} />
          ) : null}
        </div>

        <div className="project-detail-body">
          {meta.length > 0 && (
            <aside className="project-detail-meta glass-card reveal">
              {meta.map((m) => (
                <div key={m.label} className="project-detail-meta-item">
                  <span className="project-detail-meta-label">{m.label}</span>
                  <span className="project-detail-meta-value">{m.value}</span>
                </div>
              ))}
            </aside>
          )}

          <div className="project-detail-content reveal">
            <h2 className="project-detail-section-title">{t.detail.overview}</h2>
            <p className="project-detail-text">{overview}</p>

            {features.length > 0 && (
              <>
                <h2 className="project-detail-section-title">{t.detail.features}</h2>
                <ul className="project-detail-features">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {project.gallery?.length > 0 && (
          <div className="project-detail-gallery reveal">
            <h2 className="project-detail-section-title">{t.detail.gallery}</h2>
            <div className="project-detail-gallery-grid">
              {project.gallery.map((src, i) => (
                <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="project-detail-gallery-item">
                  <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
