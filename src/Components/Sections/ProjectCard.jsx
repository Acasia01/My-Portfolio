import { useState, useEffect } from 'react';
import { Code, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Github } from '../UI/CustomIcons';
import BentoCard from '../UI/BentoCard';
import { projects } from '../../data/portfolioData';

export default function ProjectsCard() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setCurrentImageIndex(0);
  };
  const handleNextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const project = projects[activeProject];
    if (Array.isArray(project.image)) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev === project.image.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeProject]);

  const currentProject = projects[activeProject];
  const currentImageSrc = Array.isArray(currentProject.image)
    ? currentProject.image[currentImageIndex]
    : currentProject.image;

  return (
    <BentoCard id="projects" className="col-span-4 row-span-1 projects-card">
      <div className="projects-header">
        <h3 className="card-title"><Code size={20} /> Featured Projects</h3>
        <div className="projects-nav">
          <button className="proj-nav-btn" onClick={handlePrevProject} aria-label="Previous"><ChevronLeft size={16} /></button>
          <button className="proj-nav-btn" onClick={handleNextProject} aria-label="Next"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="project-carousel">
        <div className="project-slide">
          <div className="project-image-wrapper">
            <img
              src={currentImageSrc}
              alt={currentProject.title}
              style={{ transition: 'opacity 0.5s ease', width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="project-info">
            <div className="project-meta">
              <div className="project-tech">
                {currentProject.tech.map((t, idx) => <span key={idx} className="tech-badge">{t}</span>)}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {activeProject + 1} of {projects.length}
              </span>
            </div>
            <h4 className="project-title">{currentProject.title}</h4>
            <p className="project-desc">{currentProject.desc}</p>
            <div className="project-links">
              <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Site <ExternalLink size={12} />
              </a>
              <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub Code <Github size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}