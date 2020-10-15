import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Experience = () => {

  return (
    <div id="experience" className="tab">
      <Pdf className="resumeBtn" targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download</button>}
      </Pdf>
      <div className="resume" ref={ref} style={{margin:"2%"}}>
        <h1 style={{marginTop:"4%"}}>Lauren Emick</h1>
        <p>My Experience here...</p>
      </div>
    </div>
  );
};

export default Experience;