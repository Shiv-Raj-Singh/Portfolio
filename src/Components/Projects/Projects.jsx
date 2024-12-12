import React from "react";
import "./project.css";
import data from "./data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container">
      {data.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-header">
            <h4 className="project-title">{project.name}</h4>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub className="icon github-icon" />
                Github
              </a>
              {project.live && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <FaExternalLinkAlt className="icon live-icon" />
                  Live
                </a>
              )}
            </div>
          </div>
          <div className="project-description">
            <h6 className="tech-stack">Tech Stack: {project.description}</h6>
            <ol className="project-body">
              {project.body.map((point, i) => (
                <li key={i} className="project-point">
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
