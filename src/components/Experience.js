import React from "react";
import Pdf from "react-to-pdf";
import skillsData from "../data/skillsData.json"
import experienceData from "../data/experienceData.json"
import ExperienceCard from "./ExperienceCard"

const ref = React.createRef();

const Experience = () => {

  return (
    <div id="experience" className="tab">
      <Pdf className="resumeBtn" targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download</button>}
      </Pdf>

      <div className="resume" ref={ref} style={{margin:"2%"}}>
        <section className="contact">
          <h1 style={{marginTop:"4%"}}>Lauren Emick</h1>
        </section>

        <div className="leftSide">
          <section className="summary">

          </section>
          <section className="skills">
            <div className="languages">
              <h3>Languages:</h3>
              {
                skillsData.languages.map(lang => (
                  <p>{lang}</p>
                ))
              }
            </div>
            <div className="libsAndFrameworks">
              <h3>Libraries and Frameworks:</h3>
              {
                skillsData.libsAndFrameworks.map(lf => (
                  <p>{lf}</p>
                ))
              }
            </div>
            <div className="databases">
              <h3>Databases:</h3>
              {
                skillsData.databases.map(db => (
                  <p>{db}</p>
                ))
              }
            </div>
            <div className="softwareDev">
              <h3>Software Development:</h3>
              {
                skillsData.softwareDev.map(sd => (
                  <p>{sd}</p>
                ))
              }
            </div>
            <div className="tools">
              <h3>Tools:</h3>
              {
                skillsData.tools.map(tool => (
                  <p>{tool}</p>
                ))
              }
            </div>
          </section>
        </div>

        <div className="rightSide">
          <section className="projects">

          </section>
          <section className="experienceList">
            <h3>MediaPRO: Cybersecurity and Privacy Education</h3>
            <p>June  2018 - April 2020</p>
            <div className="experienceList">
              {
                  experienceData.map(job => (
                    <ExperienceCard key={job.position} experience={job} />
                  ))
              }
            </div>
          </section>
          <section className="awards">

          </section>
          <section className="educationList">
            <div className="education">
              <h3>Lambda School</h3>
              <h3>Certificate of Completion Full Stack Web Development and Computer Science</h3>
              <p>April 2020 - March 2021</p>
            </div>
            <div className="education">
              <h3>University of Oregon</h3>
              <h3>Bachelor of Science in Product Design, Minor in Business Administration</h3>
              <p>September 2013 - June 2017</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;