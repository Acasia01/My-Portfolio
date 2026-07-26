import { scrollToSection } from "../../Utils/helpers";
import { Download } from "lucide-react";
import resumeFile from "../../../public/resume.pdf";
import IDCard from "../UI/IDCard";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <div
          className="logo logo-modern"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'relative', width: '80px', height: '60px' }}
        >
          <IDCard />
        </div>

        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About me</a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-actions">
        <a href={resumeFile} download="Renuka_Resume.pdf" className="resume-btn-modern">
          <Download size={16} /> Download Resume
        </a>
        <button className="talk-btn-modern" onClick={() => scrollToSection('contact')}>
          Get in touch!
        </button>
      </div>
    </header>
  );
}