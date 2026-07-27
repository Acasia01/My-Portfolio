import { useState, useEffect } from 'react';
import { Code, ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Github } from '../UI/CustomIcons';
import BentoCard from '../UI/BentoCard';
import { projects } from '../../data/portfolioData';

const projectImageCaptions = {
  "Project Management Tool": [
    "Application Homepage",
    "Main Metrics Dashboard",
    "Interactive Kanban Board",
    "Team Management Panel",
    "Calendar & Schedules View",
    "Gantt Chart Project Timeline",
    "Recent Activities Audit Log",
    "Analytical Reports Section",
    "Real-time Notification Center",
    "System Settings & Admin Console"
  ],
  "Restu India | Hospital Furniture Website": [
    "Hospital Furniture Admin Dashboard",
    "Dynamic Product Catalog Page"
  ],
  "Celestia | E-commerce Platform": [
    "E-Commerce Landing Page",
    "Shop Collections Page",
    "Product Grid & Search Filters",
    "Shop Collections Categories Grid",
    "About Us Details Section"
  ]
};

export function SingleProjectCard({ project }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const images = Array.isArray(project.image) ? project.image : [project.image];
  const captions = projectImageCaptions[project.title] || [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIdx((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="single-project-card">
      <div className="project-card-image-box">
        <img
          src={images[currentImgIdx]}
          alt={project.title}
          className="project-card-img"
        />
        {captions[currentImgIdx] && (
          <div className="project-image-caption-tag">
            {captions[currentImgIdx]}
          </div>
        )}
        {images.length > 1 && (
          <>
            <button
              className="proj-mini-nav-btn prev"
              onClick={handlePrevImg}
              aria-label="Previous view"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              className="proj-mini-nav-btn next"
              onClick={handleNextImg}
              aria-label="Next view"
            >
              <ChevronRight size={14} />
            </button>
            <div className="project-img-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`img-dot ${idx === currentImgIdx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIdx(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-card-details">
        <h4 className="project-title">{project.title}</h4>
        <p className="project-desc">{project.desc}</p>

        <div className="project-tech">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Site <ExternalLink size={12} />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Code <Github size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCard({ onViewAllProjects }) {
  const displayedProjects = projects.slice(0, 4);

  return (
    <BentoCard id="projects" className="col-span-4 row-span-1 projects-card">
      <div className="projects-header">
        <h3 className="card-title">
          <Code size={20} /> Featured Projects
        </h3>
        <span className="projects-count-badge">
          {projects.length} Projects
        </span>
      </div>
      <div className="all-projects-grid">
        {displayedProjects.map((project, idx) => (
          <SingleProjectCard key={idx} project={project} />
        ))}
      </div>
      <div className="view-all-projects-wrapper">
        <button className="view-all-projects-btn" onClick={onViewAllProjects}>
          View All Projects <ArrowRight size={16} />
        </button>
      </div>
    </BentoCard>
  );
}
