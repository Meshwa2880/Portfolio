import { education } from '../data/content';
import './Section.css';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-inner">
        <header className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in computer science and IT solutions
          </p>
        </header>
        <div className="education-list">
          {education.map((item) => (
            <div key={item.school} className="education-card">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-meta">
                {item.location} • {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
