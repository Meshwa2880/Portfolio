import { useState } from 'react';
import { profile } from '../data/content';
import './Section.css';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and challenging projects
          </p>
        </header>
        <div className="contact-wrapper">
          <div className="contact-card">
          <p className="contact-intro">
            I'm always interested in discussing new opportunities, full-stack or product projects, and ways to deliver high-impact software. Reach out anytime.
          </p>
          <div className="contact-details">
            <div className="contact-item contact-item-email">
              <span className="contact-label">Email</span>
              <a href={`mailto:${profile.email}`} className="contact-value contact-link">{profile.email}</a>
              <button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copy email">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{profile.phone}</span>
            </a>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">{profile.location}</span>
            </div>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Send an Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
