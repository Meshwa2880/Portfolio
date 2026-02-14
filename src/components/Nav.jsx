import { useState } from 'react';
import './Nav.css';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ profile, active: activeProp }) {
  const [open, setOpen] = useState(false);
  const active = activeProp ?? 'hero';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <span className="nav-name">{profile.name}</span>
          <span className="nav-title">{profile.title}</span>
        </a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="nav-cta"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
