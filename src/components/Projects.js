import React from "react";
import projectData from "../data/projectData.json";
import Project from "./Project";

const Projects = () => {

  return (
    <div id="projects" className="tab">
      <div className="projectList">
        {
          projectData.map(project => {
            return (
              <Project key={project.projectName} project={project} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;