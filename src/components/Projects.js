import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio showcasing skills, projects, and contact info.",
    github: "https://github.com/your-username/portfolio",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
  },
  {
    name: "To-do App",
    description: "A productivity app to manage daily tasks efficiently.",
    github: "https://github.com/your-username/todo-app",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    name: "Blog Website",
    description: "A responsive blog site for posting articles and managing content.",
    github: "https://github.com/your-username/blog-site",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaReact />],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card animate-fade-up">
            <div className="project-header">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
              <h3>{project.name}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
