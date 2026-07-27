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

  const navigateToHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#all-projects') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header 
        currentView={currentView}
        onViewHome={navigateToHome}
        onViewProjects={navigateToProjects}
      />
      
      {currentView === 'home' ? (
        <main className="bento-container">
          <AboutCard />
          <ProfileCard />
          <SkillsCard />
          <ProjectsCard onViewAllProjects={navigateToProjects} />
          <ExperienceCard />
          <EducationAndCertificationsCard />
          <ContactCard />
        </main>
      ) : (
        <main className="projects-page-wrapper">
          <ProjectsPage onViewHome={navigateToHome} />
        </main>
      )}

      <Footer />
    </>
  );
}