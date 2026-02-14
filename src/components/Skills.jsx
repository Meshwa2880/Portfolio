import { skills } from '../data/content';
import './Section.css';
import './Skills.css';

const skillLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases',
  tools: 'Dev Tools & Automation',
  methodologies: 'Methodologies',
  cloud: 'Cloud & DevOps',
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Full-stack expertise across modern languages, frameworks, and platforms
          </p>
        </header>
        <div className="skills-grid">
          {Object.entries(skills).map(([key, items]) => (
            <div key={key} className="skills-group">
              <h3 className="skills-group-title">{skillLabels[key]}</h3>
              <div className="skills-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
