import { projects } from '../data/content';
import './Section.css';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Side projects and tools that showcase range and impact
          </p>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
              </div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <p className="project-desc">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
