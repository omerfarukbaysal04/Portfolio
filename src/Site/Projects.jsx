import { Link } from 'react-router-dom';
import { ArrowIcon } from '../components/AnimatedSVGs';
import FeaturedSlider from '../components/FeaturedSlider';
import { projects, getProjectThumb } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

// Category groups shown under the featured slider, in this order.
const groupOrder = ['cyber', 'web', 'game'];

const ProjectCard = ({ project, index }) => {
  const { t, tr } = useLanguage();
  const thumb = getProjectThumb(project);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="project-cover">
        {thumb && <img className="project-cover-img" src={thumb} alt={project.title} loading="lazy" />}
        <span className="project-badge">{t.projects.categories[project.category]}</span>
        {project.media?.type === 'video' && (
          <span className="project-video-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{tr(project.tagline)}</p>
        <div className="project-tags">
          {project.tech.slice(0, 3).map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <span className="project-cta">
          {t.projects.viewDetails}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">
            {t.projects.pre} {t.projects.hi && <span className="gradient-text">{t.projects.hi}</span>}
          </h2>
        </div>

        <FeaturedSlider />

        {groupOrder.map((key) => {
          const list = projects.filter((p) => p.category === key);
          if (list.length === 0) return null;
          return (
            <div key={key} className="project-group">
              <h3 className="project-group-title reveal">
                {t.projects.categories[key]}
                <span className="project-group-count">{list.length}</span>
              </h3>
              <div className="projects-grid">
                {list.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
