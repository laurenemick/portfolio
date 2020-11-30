import React, { useState } from "react";
import resume from "../images/Resume.pdf"
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Document, Page} from 'react-pdf';
import Typography from "@material-ui/core/Typography";

// import skillsData from "../data/skillsData.json"
// import experienceData from "../data/experienceData.json"
// import ExperienceCard from "./ExperienceCard"

// const ref = React.createRef();

const Experience = () => {
  // const [numPages, setNumPages] = useState(null); 
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages); 
  //   setPageNumber(1); 
  // }

  return (
    <div className="experience">
      <Typography style={{fontSize: "2.4rem", paddingRight: "2%"}}>
        Download Lauren's Resume:
      </Typography>
      <Button varient="contained" target="_blank" rel="noopener" size="large" color="secondary" underline="none" style={{border:"1px solid black"}} href={resume}>
        <SaveIcon />
          Download
      </Button>
      {/* <Document
        file='https://github.com/laurenemick/portfolio/blob/master/src/images/Resume.pdf?raw=true'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} /> 
      </Document> */}
    </div>

    // <div id="experience" className="tab">
    //   <Pdf className="resumeBtn" targetRef={ref} filename="resume.pdf">
    //     {({ toPdf }) => <button onClick={toPdf}>Download</button>}
    //   </Pdf>

    //     <section className="contact">
    //       <h1 style={{marginTop:"4%"}}>Lauren Emick</h1>
    //         <h3>Seattle, Washington</h3>
    //         <h3>(206) 445-8300</h3>
    //         <h3>laurenemick6@gmail.com</h3>
    //     </section>
    //   <div className="resume" ref={ref} style={{margin:"2%"}}>
        
    //     <div className="leftSide">
    //       <section className="bio">
          
    //       </section>

    //       <section className="skills">
    //         <div className="languages skillsContainer">
    //           <h3>Languages:</h3>
    //           {
    //             skillsData.languages.map(lang => (
    //               <p>{lang}</p>
    //             ))
    //           }
    //         </div>
    //         <div className="libsAndFrameworks skillsContainer">
    //           <h3>Libraries and Frameworks:</h3>
    //           {
    //             skillsData.libsAndFrameworks.map(lf => (
    //               <p>{lf}</p>
    //             ))
    //           }
    //         </div>
    //         <div className="databases skillsContainer">
    //           <h3>Databases:</h3>
    //           {
    //             skillsData.databases.map(db => (
    //               <p>{db}</p>
    //             ))
    //           }
    //         </div>
    //         <div className="softwareDev skillsContainer">
    //           <h3>Software Development:</h3>
    //           {
    //             skillsData.softwareDev.map(sd => (
    //               <p>{sd}</p>
    //             ))
    //           }
    //         </div>

    //         <h3>Tools:</h3>
    //         <div className="tools skillsContainer">
    //           {
    //             skillsData.tools.map(tool => (
    //               <p>{tool}</p>
    //             ))
    //           }
    //         </div>
    //       </section>

    //       <section className="educationList">
    //         <div className="education">
    //           <h3>Lambda School</h3>
    //           <p>Certificate of Completion Full Stack Web Development and Computer Science</p>
    //           <p>April 2020 - March 2021</p>
    //         </div>
    //         <div className="education">
    //           <h3>University of Oregon</h3>
    //           <p>Bachelor of Science in Product Design, Minor in Business Administration</p>
    //           <p>September 2013 - June 2017</p>
    //         </div>
    //       </section>
    //     </div>

    //     <div className="rightSide">
    //       <section className="projects">

    //       </section>

    //       <section className="experienceList">
    //         <h3>MediaPRO: Cybersecurity and Privacy Education</h3>
    //         <p>June  2018 - April 2020</p>
    //         <div className="experienceList">
    //           {
    //               experienceData.map(job => (
    //                 <ExperienceCard key={job.position} experience={job} />
    //               ))
    //           }
    //         </div>
    //       </section>
    //       <section className="awards">

    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Experience;