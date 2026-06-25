import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../components/AnimatedSVGs';
import LazyVideo from '../components/LazyVideo';
import { projects, categoryKeys } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t, tr } = useLanguage();

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">
            {t.projects.pre} {t.projects.hi && <span className="gradient-text">{t.projects.hi}</span>}
          </h2>

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

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.slug} className="glass-card project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              {project.media?.type === 'video' ? (
                <div className="project-media">
                  <LazyVideo src={project.media.src} title={project.title} />
                </div>
              ) : (
                <Link to={`/projects/${project.slug}`} className="project-media" aria-label={`${project.title} details`}>
                  {project.media?.type === 'image' ? (
                    <img src={project.media.src} alt={project.title} />
                  ) : null}
                </Link>
              )}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{tr(project.tagline)}</p>
                <div className="project-tags">
                  {project.tech.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <Link to={`/projects/${project.slug}`} className="project-link project-card-link">
                    {t.projects.viewDetails}
                    <ArrowIcon />
                  </Link>
                  {project.links?.[0] && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      {tr(project.links[0].label)}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
