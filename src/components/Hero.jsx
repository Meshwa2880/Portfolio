import { useState, useEffect } from 'react';
import { profile, summary, heroBadges, highlights, taglines } from '../data/content';
import './Hero.css';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const initials = profile.name.split(' ').map((n) => n[0]).join('');
  const showPhoto = profile.photo && !photoError;

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content hero-content-animate">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline" key={taglineIndex} aria-live="polite">
            {taglines[taglineIndex]}
          </p>
          <div className="hero-pills">
            {heroBadges.map((b) => (
              <span key={b.label} className="hero-pill">
                <span className="hero-pill-icon">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
          <div className="hero-summary">
            {summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="hero-metrics">
            {highlights.map(({ value, label }) => (
              <div key={label} className="hero-metric">
                <span className="hero-metric-value">{value}</span>
                <span className="hero-metric-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <span className="btn-icon">↓</span>
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              <span className="btn-icon">◇</span>
              View My Work
            </a>
          </div>
          <p className="hero-location">
            {profile.location} • {profile.availability}
          </p>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrap">
            {showPhoto ? (
              <img
                src={profile.photo}
                alt=""
                className="hero-photo"
                onError={() => setPhotoError(true)}
              />
            ) : null}
            <div className={`hero-photo-placeholder ${!showPhoto ? 'visible' : ''}`}>
              {initials}
            </div>
          </div>
          <div className="hero-side">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
