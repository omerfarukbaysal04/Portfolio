import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiItchdotio } from 'react-icons/si';
import { FaGooglePlay } from 'react-icons/fa6';
import { ArrowIcon } from '../components/AnimatedSVGs';
import FeaturedSlider from '../components/FeaturedSlider';
import { projects, getProjectThumb } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const categoryTabs = ['cyber', 'game', 'web'];

// Store pages shown as cards in the Game Development tab.
const stores = [
  { key: 'itch', icon: <SiItchdotio />, url: 'https://baysalgames.itch.io' },
  { key: 'play', icon: <FaGooglePlay />, url: 'https://play.google.com/store/apps/details?id=com.BaysalGames.Bally' },
];

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

const StoreCard = ({ store, index }) => {
  const { t } = useLanguage();
  const s = t.projects.stores[store.key];

  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card store-card store-card--${store.key}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="store-cover">
        <span className="store-icon" aria-hidden="true">{store.icon}</span>
        <span className="project-badge">{t.projects.storeBadge}</span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{s.title}</h3>
        <p className="project-description">{s.desc}</p>
        <span className="project-cta">
          {s.cta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </div>
    </a>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(categoryTabs[0]);
  const { t } = useLanguage();

  const list = projects.filter((p) => p.category === activeCategory);
  const cards = list.map((project, index) => (
    <ProjectCard key={project.slug} project={project} index={index} />
  ));

  // Games: 2x2 grid of games, store cards in the right-hand column (itch.io, then Google Play).
  if (activeCategory === 'game') {
    const [itch, play] = stores.map((store, i) => (
      <StoreCard key={store.key} store={store} index={list.length + i} />
    ));
    cards.splice(2, 0, itch);
    cards.splice(5, 0, play);
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">
            {t.projects.pre} {t.projects.hi && <span className="gradient-text">{t.projects.hi}</span>}
          </h2>
        </div>

        <FeaturedSlider />

        <div className="project-categories reveal">
          {categoryTabs.map((key) => (
            <button
              key={key}
              type="button"
              className={`category-btn${activeCategory === key ? ' active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {t.projects.categories[key]}
            </button>
          ))}
        </div>

        <div className="projects-grid" key={activeCategory}>
          {cards}
        </div>
      </div>
    </section>
  );
};

export default Projects;
