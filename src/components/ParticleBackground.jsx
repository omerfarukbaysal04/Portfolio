import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const particles = svg.querySelectorAll('.particle');
    const lines = svg.querySelectorAll('.connection-line');

    // Animate particles with random movements
    particles.forEach((particle, i) => {
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * -20;
      
      particle.style.animation = `particleFloat${i % 3} ${duration}s ease-in-out ${delay}s infinite`;
    });

    return () => {};
  }, []);

  // Generate random particles
  const particleCount = 50;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    r: 0.5 + Math.random() * 2,
    opacity: 0.1 + Math.random() * 0.4,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 20,
  }));

  // Generate connection lines
  const lineCount = 15;
  const lines = Array.from({ length: lineCount }, (_, i) => ({
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    opacity: 0.03 + Math.random() * 0.06,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <div className="particle-bg">
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6c63ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="particleGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            className="connection-line"
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="#6c63ff"
            strokeWidth="0.05"
            opacity={line.opacity}
          >
            <animate
              attributeName="opacity"
              values={`${line.opacity};${line.opacity * 2};${line.opacity}`}
              dur={`${line.duration}s`}
              begin={`${line.delay}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Particles */}
        {particles.map((p, i) => (
          <circle
            key={`particle-${i}`}
            className="particle"
            cx={`${p.cx}%`}
            cy={`${p.cy}%`}
            r={p.r}
            fill={i % 3 === 0 ? 'url(#particleGlow2)' : 'url(#particleGlow)'}
            opacity={p.opacity}
          >
            <animate
              attributeName="cy"
              values={`${p.cy}%;${p.cy - 3 - Math.random() * 5}%;${p.cy}%`}
              dur={`${p.duration}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              values={`${p.cx}%;${p.cx + 2 - Math.random() * 4}%;${p.cx}%`}
              dur={`${p.duration * 1.3}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${p.opacity};${p.opacity * 1.8};${p.opacity}`}
              dur={`${p.duration * 0.7}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Decorative large glow orbs */}
        <circle cx="15%" cy="30%" r="15" fill="#6c63ff" opacity="0.02">
          <animate attributeName="r" values="15;20;15" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="85%" cy="70%" r="12" fill="#00d4aa" opacity="0.02">
          <animate attributeName="r" values="12;18;12" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="20%" r="10" fill="#ff6b9d" opacity="0.015">
          <animate attributeName="r" values="10;16;10" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default ParticleBackground;
