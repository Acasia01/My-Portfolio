import { projects } from '../../data/portfolioData';
import { SingleProjectCard } from '../Sections/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="projects-page-container">
      <div className="all-projects-grid projects-page-grid">
        {projects.map((project, idx) => (
          <SingleProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
