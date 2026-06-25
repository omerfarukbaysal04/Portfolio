import React, { useState } from 'react';
import { ArrowIcon } from '../components/AnimatedSVGs';

// Lightweight YouTube facade: shows the video thumbnail until the user clicks,
// then loads the real iframe. Avoids loading several heavy YouTube embeds
// (and auto-playing them all) on page load.
const LazyVideo = ({ src, title }) => {
  const [activated, setActivated] = useState(false);
  const videoId = (src.match(/embed\/([^?/]+)/) || [])[1];
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  if (activated) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block' }}
      />
    );
  }

  return (
    <button
      type="button"
      className="video-facade"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
    >
      <span className="video-facade-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
};

const categories = [
  { key: 'all', label: 'All' },
  { key: 'cyber', label: 'Cyber Security' },
  { key: 'game', label: 'Game Development' },
  { key: 'web', label: 'Web' },
];

const projects = [
  {
    title: 'Stajio',
    description: 'Stajio is a community-driven engineering internship platform. It works on the same principle as Product Hunt: anyone can post a listing, the community upvotes them, and the highest-quality listings are highlighted. Expired listings are automatically archived.',
    video: 'https://www.youtube.com/embed/TrZ-o8HLp4Q?autoplay=1&mute=1',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Full Stack'],
    link: 'https://stajio-baysal.vercel.app/',
    linkText: 'View on Website',
    category: 'web',
  },

  {
    title: 'The Watchtower',
    description: 'Self-hosted cybersecurity monitoring tool. Scans targets for open ports, CVEs, SSL issues, DNS/email misconfigurations and subdomain exposure. Generates PDF reports and sends Telegram alerts.',
    video: 'https://www.youtube.com/embed/ex7Gkg-O8vI?autoplay=1&mute=1',
    tags: ['Python', 'FastAPI', 'Tool', 'Security'],
    link: 'https://github.com/omerfarukbaysal04/The-Watchtower',
    linkText: 'View on GitHub',
    category: 'cyber',
  },

  {
    title: 'Baysal NAC System',
    description: 'A modern, API-driven Network Access Control (NAC) system built on the AAA (Authentication, Authorization, Accounting) architecture. This project integrates FreeRADIUS with a custom FastAPI policy engine to provide dynamic VLAN assignments, secure credential management, and real-time session auditing.',
    // video: 'https://www.youtube.com/embed/ex7Gkg-O8vI?autoplay=1&mute=1
    tags: ['Python', 'FastAPI', 'FreeRADIUS', 'Tool', 'Security'],
    link: 'https://github.com/omerfarukbaysal04/baysal-nac-system',
    linkText: 'View on GitHub',
    category: 'cyber',
  },

  {
    title: 'Cyber Security Tools',
    description: 'A collection of custom-built cybersecurity tools designed for tasks such as network scanning, MAC address manipulation, packet capturing, and port analysis. These tools showcase my practical skills in Python, networking, and penetration testing fundamentals.',
    image: '/ns.png',
    tags: ['Python', 'Networking', 'Scapy', 'Security'],
    link: 'https://github.com/omerfarukbaysal04/Cyber-Security-Tools',
    linkText: 'View on GitHub',
    category: 'cyber',
  },

  {
    title: 'A Fox Story',
    description: "Foxi, a fox cursed from birth, sets out to find his brother. This game is a platformer rogue-like with a story that I made by myself from free assets, and it's the first game I've ever made.",
    video: 'https://www.youtube.com/embed/STD92cmPuUk?autoplay=1&mute=1',
    tags: ['Unity', 'C#', '2D Platformer', 'Rogue-like'],
    link: 'https://baysalgames.itch.io/a-fox-story',
    linkText: 'Play on itch.io',
    category: 'game',
  },
  {
    title: 'Glide Ball',
    description: 'Are you ready for a physics-based platforming challenge? Glide Ball tests your reflexes with smooth controls and precise movement! Guide your ball carefully, overcome obstacles, and achieve the highest score! 🎮',
    video: 'https://www.youtube.com/embed/tW3ahjArIHI?autoplay=1&mute=1',
    tags: ['Unity', 'C#', 'Mobile', 'Physics'],
    link: 'https://play.google.com/store/apps/details?id=com.BaysalGames.Bally',
    linkText: 'Google Play Store',
    category: 'game',
  },
  {
    title: 'Dodge the Asteroids!',
    description: 'In this game where you control the spaceship, the goal is to avoid damage from asteroids and destroy them.',
    image: '/dta.jpg',
    tags: ['Unity', 'C#', 'Space Shooter'],
    link: 'https://baysalgames.itch.io/dodge-the-asteroids',
    linkText: 'Play on itch.io',
    category: 'game',
  },
  {
    title: 'Cost of Redemption',
    description: 'Step into the shoes of a troubled yet loyal guardian, caught between the shadows of a haunting past and the dangers of the present. Cost of Redemption is a dramatic 2D pixel art game where every choice matters.',
    image: '/cor.png',
    tags: ['Unity', 'C#', 'Pixel Art', 'Narrative'],
    link: 'https://baysalgames.itch.io/cost-of-redemption',
    linkText: 'Play on itch.io',
    category: 'game',
  },
  {
    title: 'Kitap Vitrini',
    description: 'A full-stack web application made using React, ASP.NET Core and MS SQL for a university course project.',
    video: 'https://www.youtube.com/embed/7pRuS0D2ePo?si=SwssUum6hJnBDAuJ&autoplay=1&mute=1',
    tags: ['React', 'ASP.NET Core', 'MS SQL', 'Full Stack'],
    link: 'https://github.com/omerfarukbaysal04/Kitap-Vitrini',
    linkText: 'View on GitHub',
    category: 'web',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header reveal">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>

          <div className="project-categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`category-btn${activeCategory === cat.key ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="glass-card project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-media">
                {project.video ? (
                  <LazyVideo src={project.video} title={project.title} />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : null}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkText}
                  <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
