import React from "react";
import "./Projects.css";
import quickChatImage from "../assets/QuickChat.png";
import ClimaViewImage from "../assets/ClimaView.png"; 
import VotingSystemImage from "../assets/VotingSystem.png";
import EmolyeeSystemImage from "../assets/Employee.png";

const projectsData = [
  {
    title: "Netflix Content Analysis",
    description: `Analyzed Netflix dataset using Python and built a Power BI dashboard with DAX to uncover content trends, ratings distribution, and regional insights. 
    The dashboard provides interactive visualizations to explore content performance and user preferences across different regions.`,
    image: NetflixDatasetImage, // Replace with your image URL
    techStack: ["Python", "Pandas", "Power BI, DAX"],
    liveUrl: null, // Set to null string to remove the button
    codeUrl: "https://github.com/Abhishekcoder711/Netflix_Content_Analysis",
  },
  {
    title: "ClimaView",
    description: `Designed an interactive dashboard to visualize climate trends over time, helping users analyze CO₂ 
    emissions and temperature rise. Integrated live weather API to provide real-time temperature data for any global city.`,
    image: ClimaViewImage, // Replace with your image URL
    techStack: ["Python", "Dash", "Pandas", "Plotly", "APIs"],
    liveUrl: "https://clima-view-sigma.vercel.app", 
    codeUrl: "https://github.com/Abhishekcoder711/ClimaView",
  },
  {
    title: "Product Sales Analysis",
    description: `Developed an interactive Power BI dashboard to analyze sales performance, profit trends, and regional distribution. 
    Created KPI metrics such as Total Sales, Profit, COGS, and Profit Margin to generate business insights, and built visualizations including line charts, bar charts, treemaps, and maps. 
    Performed data cleaning and transformation using Power Query and implemented DAX measures to ensure accurate and meaningful analysis.`,
    image: ProductDashboardImage, // Replace with your image URL
    techStack: ["Power BI", "DAX", "Power Query"],
    liveUrl: null, // Set to null string to remove the button
    codeUrl: "https://github.com/Abhishekcoder711/Product-Sales-Data-Analysis-Dashboard",
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