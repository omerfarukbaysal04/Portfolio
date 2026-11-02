import { useState } from 'react';

// Lightweight video facade: shows the thumbnail until the user clicks, then
// loads the real iframe (with autoplay where the player supports it). Avoids
// loading several heavy embeds on page load. YouTube thumbnails come from the
// video id; other players (Google Drive) pass a `poster` image.
const LazyVideo = ({ src, title, poster }) => {
  const [activated, setActivated] = useState(false);
  const videoId = (src.match(/youtube\.com\/embed\/([^?/]+)/) || [])[1];
  const thumbnail = poster || (videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null);

  if (activated) {
    const playSrc = src + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1';
    return (
      <iframe
        width="100%"
        height="100%"
        src={playSrc}
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

export default LazyVideo;
