import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ProjectsCard from "./Components/Sections/ProjectCard";
import ContactCard from "./Components/Sections/ContactCard";
import {
  AboutCard,
  ProfileCard,
  SkillsCard,
  ExperienceCard,
  EducationAndCertificationsCard,
} from "./Components/Sections/StaticCards";

export default function App() {
  return (
    <>
      <Header />
      <main className="bento-container">
        <AboutCard />
        <ProfileCard />
        <SkillsCard />
        <ProjectsCard />
        <ExperienceCard />
        <EducationAndCertificationsCard />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}