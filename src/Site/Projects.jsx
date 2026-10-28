import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../components/AnimatedSVGs';
import { projects, categoryKeys, featuredSlugs, getProjectThumb } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

// Featured projects first, then the rest in data order.
const orderedProjects = [
  ...featuredSlugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean),
  ...projects.filter((p) => !featuredSlugs.includes(p.slug)),
];

const ProjectCard = ({ project, large, index }) => {
  const { t, tr } = useLanguage();
  const thumb = getProjectThumb(project);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card${large ? ' project-card--lg' : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="project-cover">
        {/* Large tile shows the whole image (infographics contain text) over a blurred fill. */}
        {thumb && large && <img className="project-cover-fill" src={thumb} alt="" aria-hidden="true" />}
        {thumb && <img className="project-cover-img" src={thumb} alt={project.title} loading={index < 3 ? 'eager' : 'lazy'} />}
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
          {project.tech.slice(0, large ? 5 : 3).map((tag) => (
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
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

  const isAll = activeCategory === 'all';
  const list = isAll ? orderedProjects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">
            {t.projects.pre} {t.projects.hi && <span className="gradient-text">{t.projects.hi}</span>}
          </h2>
          <p className="section-subtitle projects-subtitle">{t.projects.subtitle}</p>

          <div className="project-categories">
            {categoryKeys.map((key) => (
              <button
                key={key}
                className={`category-btn${activeCategory === key ? ' active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {t.projects.categories[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" key={activeCategory}>
          {list.map((project, index) => (
            <ProjectCard key={project.slug} project={project} large={isAll && index === 0} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
