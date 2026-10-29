import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiItchdotio } from 'react-icons/si';
import { FaGooglePlay } from 'react-icons/fa6';
import { ArrowIcon } from '../components/AnimatedSVGs';
import { labTopics, reportCount, LABS_COVER } from '../data/labs';
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

// Compact horizontal store link (itch.io / Google Play) under the game cards.
const StoreCard = ({ store, index }) => {
  const { t } = useLanguage();
  const s = t.projects.stores[store.key];

  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-mini store-mini--${store.key}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <span className="store-mini-icon" aria-hidden="true">{store.icon}</span>
      <span className="store-mini-text">
        <span className="store-mini-title">{s.title}</span>
        <span className="store-mini-desc">{s.desc}</span>
      </span>
      <svg className="store-mini-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </a>
  );
};

// Wide card under the cyber cards (cover on the left), linking to the lab reports page.
const LabsCard = ({ index }) => {
  const { t } = useLanguage();
  const c = t.projects.labsCard;

  return (
    <Link to="/labs" className="store-mini store-mini--labs" style={{ animationDelay: `${index * 0.05}s` }}>
      <span className="labs-card-cover">
        <img src={LABS_COVER} alt="" loading="lazy" />
      </span>
      <span className="store-mini-text">
        <span className="store-mini-title">{c.title}</span>
        <span className="store-mini-desc">{c.desc}</span>
        <span className="project-tags">
          <span className="project-tag">{reportCount} {t.labs.stats.reports}</span>
          {labTopics.map((topic) => (
            <span key={topic.slug} className="project-tag">{topic.title}</span>
          ))}
        </span>
      </span>
      <ArrowIcon />
    </Link>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(categoryTabs[0]);
  const { t } = useLanguage();

  const list = projects.filter((p) => p.category === activeCategory);
  const isGame = activeCategory === 'game';

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

        <div className={`projects-grid${isGame ? ' projects-grid--game' : ''}`} key={activeCategory}>
          {list.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {isGame && (
          <div className="store-row">
            {stores.map((store, i) => (
              <StoreCard key={store.key} store={store} index={list.length + i} />
            ))}
          </div>
        )}

        {activeCategory === 'cyber' && (
          <div className="store-row store-row--single">
            <LabsCard index={list.length} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
