import { scrollToSection } from "../../Utils/helpers";
import { Download } from "lucide-react";
import resumeFile from "../../../public/resume.pdf";
import IDCard from "../UI/IDCard";

export default function Header({ currentView, onViewHome, onViewProjects }) {
  const handleNavClick = (sectionId) => {
    if (currentView !== 'home') {
      onViewHome();
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (currentView !== 'home') {
      onViewHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div
          className="logo logo-modern"
          onClick={handleLogoClick}
          style={{ position: 'relative', width: '80px', height: '60px', cursor: 'pointer' }}
        >
          <IDCard />
        </div>

        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About me</a>
            </li>
            <li className="nav-item">
              <a href="#all-projects" onClick={(e) => { 
                e.preventDefault(); 
                onViewProjects();
              }}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}>Work</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-actions">
        <a href={resumeFile} download="Renuka_Resume.pdf" className="resume-btn-modern">
          <Download size={16} /> Download Resume
        </a>
        <button className="talk-btn-modern" onClick={() => handleNavClick('contact')}>
          Get in touch!
        </button>
      </div>
    </header>
  );
}