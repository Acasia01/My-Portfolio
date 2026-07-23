import restuDashboard from '../assets/Restu Images/Dashboard.png';
import restuProduct from '../assets/Restu Images/Product Page.png';

import pmHomepage from '../assets/Project Manager Images/Homepage.png';
import pmDashboard from '../assets/Project Manager Images/Dashboard.png';
import pmProject from '../assets/Project Manager Images/Project Page.png';
import pmTeam from '../assets/Project Manager Images/Team Page.png';
import pmCalender from '../assets/Project Manager Images/Calender Page.png';
import pmGantt from '../assets/Project Manager Images/Gantt Chart - Calender Page.png';
import pmActivity from '../assets/Project Manager Images/Activity Page.png';
import pmReports from '../assets/Project Manager Images/Reports Page.png';
import pmNotification from '../assets/Project Manager Images/Notification Page.png';
import pmAdmin from '../assets/Project Manager Images/Admin Panel.png';

import celestia1 from '../assets/Celestia/celestia website images.png';
import celestia2 from '../assets/Celestia/shop page.png';
import celestia3 from '../assets/Celestia/shop page 2.png';
import celestia4 from '../assets/Celestia/category section.png';
import celestia5 from '../assets/Celestia/about use.png';

export const projects = [
  {
    title: "Project Management Tool",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Git", "Hostinger"],
    desc: "Engineered a full-stack project management platform to streamline task delegation, sprint planning, and cross-functional team collaboration using Agile methodologies. Developed interactive, real-time dashboards to track project lifecycles and key metrics, reducing task reporting time by roughly 30% by translating complex backend data into intuitive visual reports.",
    image: [pmHomepage, pmDashboard, pmProject, pmTeam, pmCalender, pmGantt, pmActivity, pmReports, pmNotification, pmAdmin],
    liveLink: "https://github.com/Acasia01/Project-Management-Tool",
    githubLink: "https://github.com/Acasia01/Project-Management-Tool"
  },
  {
    title: "Restu India | Hospital Furniture Website",
    tech: ["Django", "React.js", "SQL", "Git", "Hostinger"],
    desc: "Architected and deployed a fully responsive, full-stack web portal on Hostinger for a healthcare furniture provider, ensuring seamless navigation across a catalog of 150+ products. Engineered an automated quote generation system and dynamic product catalog, reducing manual quoting effort by approximately 40%, alongside a secure admin panel for backend data management.",
    image: [restuDashboard, restuProduct],
    liveLink: "https://www.resatuindia.com/",
    githubLink: "https://github.com/Acasia01/Restu_India"
  },
  {
    title: "Celestia | E-commerce Platform",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    desc: "Built a robust e-commerce architecture featuring advanced product filtering and optimized search functionality. Developed personalized user features, including a persistent user wishlist system to track desired products across sessions.",
    image: [celestia1, celestia2, celestia3, celestia4, celestia5],
    liveLink: "https://github.com/Acasia01",
    githubLink: "https://github.com/Acasia01/Celestia"
  }
];

export const awards = [
  {
    title: "Google Data Analytics",
    year: "2025",
    region: "Google / Coursera",
    colorClass: "bg-blue",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Data Analytics Certificate",
    year: "2024",
    region: "Professional",
    colorClass: "bg-purple",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "Computec Web Development",
    year: "2023",
    region: "Computec Institute",
    colorClass: "bg-green",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
];