import React from "react";
import "./Projects.css";
import quickChatImage from "../assets/QuickChat.png";
import ClimaViewImage from "../assets/ClimaView.png"; 
import VotingSystemImage from "../assets/VotingSystem.png";
import EmolyeeSystemImage from "../assets/Employee.png";

const projectsData = [
  {
    title: "QuickChat",
    description: `Quick Chat is a private real-time chat application designed for secure one-to-one conversations. 
    The app supports instant messaging, emoji reactions, and smooth real-time updates, making conversations fast.`,
    image: quickChatImage, 
    techStack: ["Socket.io", "Express.js", "Node.js", "MongoDB", "HTML", "CSS"],
    liveUrl: "https://quickchat-t1wq.onrender.com",
    codeUrl: "https://github.com/Abhishekcoder711/QuickChat",
  },
  {
    title: "ClimaView",
    description: `Designed an interactive dashboard to visualize climate trends over time, helping users analyze CO₂ 
    emissions and temperature rise. Integrated live weather API to provide real-time temperature data for any global city.`,
    image: ClimaViewImage, // Replace with your image URL
    techStack: ["Python", "Dash", "Pandas", "Plotly", "APIs"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Employee Management System",
    description: `Built a secure, role-based Employee Management platform supporting CRUD operations with MySQL 
    database integration. Designed a responsive dashboard interface for admin operations with real-time updates.`,
    image: EmolyeeSystemImage, // Replace with your image URL
    techStack: ["Node.js", "Express", "MySQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/Abhishekcoder711/Employee-Management-System",
  },
  {
    title: "Online Voting System",
    description: `A secure and efficient online voting platform built with Python. This system
    allows users to register, log in, cast their vote for political parties, and view real-time voting results.
    It ensures secure authentication and prevents duplicate voting.`,
    image: VotingSystemImage, // Replace with your image URL
    techStack: ["Python"],
    liveUrl: null, // Set to null string to remove the button
    codeUrl: "https://github.com/Abhishekcoder711/Online-Voting-System",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack-icons">
                {project.techStack.map((tech, i) => (
                  <span className="tech-icon" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                {project.liveUrl && ( // This condition checks if liveUrl exists
                  <a href={project.liveUrl} className="live-button" target="_blank" rel="noopener noreferrer">See Live</a>
                )}
                <a href={project.codeUrl} className="code-button" target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;