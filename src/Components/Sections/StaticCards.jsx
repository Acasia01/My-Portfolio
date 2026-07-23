import { MapPin, Mail, Phone, Code, Server, Database, Wrench, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from '../UI/CustomIcons';
import BentoCard from '../UI/BentoCard';
import { awards } from '../../data/portfolioData';
import avatarImg from '../../assets/avatar.png';
import skillsBgImg from '../../assets/skills-bg.png';
import { useState } from 'react';

// 1. Profile Avatar Component
const ProfileAvatar = ({ avatarImg }) => {
  const [showBadges, setShowBadges] = useState(false);

  const handleImageClick = () => {
    setShowBadges((prev) => !prev);
  };

  const profilePic = "/profile_pic.jpeg";

  return (
    <div className="profile-avatar-container-modern">
      <div className="profile-avatar-glow-circle"></div>

      <div className="profile-avatar-flip-card" onClick={handleImageClick}>
        <div className="profile-avatar-flip-inner">
          <div className="profile-avatar-flip-front">
            <img
              className="profile-avatar-image-modern"
              src={profilePic}
              alt="Renuka Profile"
            />
          </div>
          <div className="profile-avatar-flip-back">
            <img
              className="profile-avatar-image-modern"
              src="/avatar.png"
              alt="Renuka Avatar"
            />
          </div>
        </div>
      </div>

      {showBadges && (
        <>
          <div className="floating-badge-modern floating-badge-modern-left">BCA Graduate</div>
          <div className="floating-badge-modern floating-badge-modern-right">Full-Stack Dev</div>
        </>
      )}
    </div>
  );
};

export default ProfileAvatar;

// 2. About Card
export const AboutCard = () => (
  <BentoCard id="about" className="col-span-2 row-span-2 about-card-modern">
    <h2 className="about-title-modern font-script" style={{ fontSize: '2.5rem', fontWeight: 'normal', textTransform: 'none', letterSpacing: 'normal', lineHeight: 1.2 , color: "#f5a623"  }}>
      Hello, I'm Renuka !
    </h2>
    <p className="about-desc-modern">
      Full-Stack Web Developer proficient in MERN and Django frameworks. Adept at translating complex data into scalable, responsive web applications, with hands-on experience designing comprehensive product portals and optimizing backend architecture.
    </p>
    <a href="https://www.linkedin.com/in/renuka-dhoundiyal01/" target="_blank" rel="noopener noreferrer" className="link-pill-modern">
      <span className="link-pill-icon-modern">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      LinkedIn
    </a>
  </BentoCard>
);

// 3. Profile Card
export const ProfileCard = () => (
  <BentoCard className="col-span-2 row-span-2 profile-card-modern">
    <ProfileAvatar avatarImg={avatarImg} />
    <div className="contact-panel-modern">
      <h4 className="contact-panel-title-modern">Contact</h4>
      <ul className="contact-panel-list-modern">
        <li className="contact-panel-item-modern"><MapPin size={14} /> New Delhi, India</li>
        <li className="contact-panel-item-modern"><Mail size={14} /> acasiadl01@gmail.com</li>
      </ul>
    </div>
  </BentoCard>
);

// 4. Skills Card
export const SkillsCard = () => {
  const categories = [
    {
      title: "Frontend",
      type: "frontend",
      icon: <Code size={16} />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "UI/UX"]
    },
    {
      title: "Backend",
      type: "backend",
      icon: <Server size={16} />,
      skills: ["Node.js", "Express.js", "Django (Python)"]
    },
    {
      title: "Databases",
      type: "databases",
      icon: <Database size={16} />,
      skills: ["MongoDB", "SQL", "SQLite", "BigQuery"]
    },
    {
      title: "Tools & Deploy",
      type: "tools",
      icon: <Wrench size={16} />,
      skills: ["Git", "GitHub", "Railway", "Hostinger"]
    }
  ];

  return (
    <BentoCard className="col-span-4 skills-deck-card">
      <div className="skills-deck-header" style={{ opacity: 1, pointerEvents: 'auto' }}>
        <h3 className="card-title" style={{ margin: 0 }}>
          <Code size={20} /> Tech Stack & Skills
        </h3>
      </div>

      <div className="skills-grid" style={{ padding: '0 1rem 1rem' }}>
        {categories.map((cat, idx) => (
          <div
            key={cat.type}
            className="skills-static-card"
          >
            <h4>
              {cat.icon}
              {cat.title}
            </h4>
            <div className="skills-tags">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

// 5. Experience Card
export const ExperienceCard = () => (
  <BentoCard id="work" className="col-span-4 row-span-1 experience-card">
    <h3 className="card-title"><Briefcase size={20} style={{ color: "#f5a623" }}/> Work Experience</h3>
    <div className="experience-timeline-horizontal">
      <div className="experience-item">
        <div className="exp-header">
          <h4 className="exp-role">MIS Executive</h4>
          <span className="exp-date">Dec 2025 - Present</span>
        </div>
        <div className="exp-company">Go Delivery Pvt Ltd</div>
        <p className="exp-desc">Managed complex internal databases and ensured data integrity for transaction tracking.</p>
      </div>
      <div className="experience-item">
        <div className="exp-header">
          <h4 className="exp-role">MIS Executive</h4>
          <span className="exp-date">Aug 2025 - Dec 2025</span>
        </div>
        <div className="exp-company">Unisoft Healthcare Pvt Ltd</div>
        <p className="exp-desc">Developed interactive dashboards, bridging the gap between raw data and user-friendly visual interfaces.</p>
      </div>
      <div className="experience-item">
        <div className="exp-header">
          <h4 className="exp-role">Data Analyst</h4>
          <span className="exp-date">Sep 2024 - July 2025</span>
        </div>
        <div className="exp-company">Amaze Consulting Services</div>
        <p className="exp-desc">Built interactive data visualizations and wrote extensive technical documentation detailing system logic.</p>
      </div>
    </div>
  </BentoCard>
);

// 6. Education and Certifications Card
export const EducationAndCertificationsCard = () => (
  <BentoCard className="col-span-4 row-span-1 education-certifications-card">
    <div className="education-certifications-grid">
      {/* Education Section */}
      <div className="education-section-block">
        <h3 className="card-title" style={{ marginBottom: '1.25rem' }}>
          <GraduationCap size={20} style={{ color: "#f5a623" }}/> Education
        </h3>
        <div className="education-list-modern">
          <div className="education-item-modern">
            <div className="edu-header-modern">
              <h4 className="edu-degree-modern">Bachelors in Computer Applications (BCA)</h4>
              <span className="edu-date-modern">2022 - 2025</span>
            </div>
            <div className="edu-school-modern">IGNOU</div>
          </div>
          <div className="education-item-modern" style={{ marginTop: '1rem' }}>
            <div className="edu-header-modern">
              <h4 className="edu-degree-modern">Senior Secondary School</h4>
              <span className="edu-date-modern">2019 - 2020</span>
            </div>
            <div className="edu-school-modern">CBSE</div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section-block">
        <h3 className="card-title" style={{ marginBottom: '1.25rem' }}>
          <Award size={20} /> Certifications
        </h3>
        <div className="certifications-list-modern">
          {awards.map((award, index) => (
            <div className="compact-cert-item" key={index}>
              <div className="cert-left">
                <div className={`cert-icon-wrapper-compact ${award.colorClass}`}>
                  {award.icon}
                </div>
                <div className="cert-info-compact">
                  <h4 className="cert-title-compact">{award.title}</h4>
                  <span className="cert-region-compact">{award.region}</span>
                </div>
              </div>
              <div className="cert-right">
                <span className="cert-date-compact">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BentoCard>
);

// 7. Resume Links Card
export const ResumeLinksCard = () => (
  <BentoCard className="col-span-2 row-span-1 resume-links-card">
    <div className="social-links-section">
      <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Find Me Online</h4>
      <div className="social-links-grid">
        <a href="https://github.com/Acasia01" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/renuka-dhoundiyal01/" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn"><LinkedIn size={20} /></a>
        <a href="mailto:acasiadl01@gmail.com" className="social-link-btn" aria-label="Email"><Mail size={20} /></a>
      </div>
    </div>
  </BentoCard>
);