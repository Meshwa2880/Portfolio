import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { profile } from './data/content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { rootMargin: '-8% 0px -8% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        navObserver.observe(el);
        if (id !== 'hero') animationObserver.observe(el);
      }
    });
    return () => {
      navObserver.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Nav profile={profile} active={activeSection} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
