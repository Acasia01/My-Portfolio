import { useState, useEffect } from 'react';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ProjectsCard from "./Components/Sections/ProjectCard";
import ContactCard from "./Components/Sections/ContactCard";
import ProjectsPage from "./Components/Pages/ProjectsPage";
import {
  AboutCard,
  ProfileCard,
  SkillsCard,
  ExperienceCard,
  EducationAndCertificationsCard,
} from "./Components/Sections/StaticCards";

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#all-projects') {
        setCurrentView('projects');
      } else if (window.location.hash === '#about-me') {
        setCurrentView('about');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProjects = () => {
    setCurrentView('projects');
    window.location.hash = 'all-projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentView('about');
    window.location.hash = 'about-me';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#all-projects' || window.location.hash === '#about-me') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header 
        currentView={currentView}
        onViewHome={navigateToHome}
        onViewAbout={navigateToAbout}
        onViewProjects={navigateToProjects}
      />
      
      {currentView === 'home' && (
        <main className="bento-container">
          <AboutCard />
          <ProfileCard />
          <SkillsCard />
          <ProjectsCard onViewAllProjects={navigateToProjects} />
          <ExperienceCard />
          <EducationAndCertificationsCard />
          <ContactCard />
        </main>
      )}

      {/* {currentView === 'about' && (
        <main className="about-page-wrapper">
          <AboutPage 
            onViewHome={navigateToHome} 
            onViewProjects={navigateToProjects} 
            onViewContact={() => {
              navigateToHome();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
          />
        </main>
      )} */}

      {currentView === 'projects' && (
        <main className="projects-page-wrapper">
          <ProjectsPage onViewHome={navigateToHome} />
        </main>
      )}

      <Footer />
    </>
  );
}