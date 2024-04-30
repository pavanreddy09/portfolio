import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Projects({ projects }) {
  return (
    <div className="projects" id="projects">
      <div className="project-container">
        <h2>PROJECTS</h2>
        <div className="project-cards">
          {projects.map((project) => {
            const { name, description, techstack, githublink, livelink } =
              project;
            return (
              <div className="card" key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                  {techstack.map((stack) => {
                    return <li key={stack}>{stack}</li>;
                  })}
                </ul>
                <div className="links">
                  <a href={githublink} target="_blank" rel="noreferrer">
                    <GitHubIcon sx={{ fontSize: "2.5rem" }} />
                    <ArrowOutwardIcon
                      sx={{ fontSize: "1.5rem", marginBottom: "15px" }}
                    />
                  </a>
                  {livelink && (
                    <div className="livelink">
                      <a href={livelink} target="_blank" rel="noreferrer">
                        <LaunchIcon />
                        <p> Visit site</p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="visit-github">
          <h1>
            Visit my{" "}
            <a
              href="https://github.com/pavanreddy09?tab=repositories"
              target="_blank"
            >
              GitHub
              <ArrowOutwardIcon />
            </a>{" "}
            page to view more projects.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
