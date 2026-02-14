import { experience } from '../data/content';
import './Section.css';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Full-stack and backend leadership across legacy and modern systems
          </p>
        </header>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">{job.company}</h3>
                  <p className="experience-location">{job.location}</p>
                </div>
                <div className="experience-tech">
                  {job.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              {job.roles.map((role) => (
                <div key={role.title} className="experience-role">
                  <h4 className="experience-role-title">{role.title}</h4>
                  <span className="experience-period">{role.period}</span>
                  <ul className="experience-bullets">
                    {role.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
