import React from "react";
import projectData from "../data/projectData.json";
import Projects from "./Projects";

const ProjectContainer = () => {

  return (
    <div id="projectContainer">
      <div>
        {
          projectData.map(projectObject => {
            return (
              <div>
                <Projects 
                  key = {projectObject.projectName}
                  project = {projectObject}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProjectContainer;