import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const lambdalink = <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>;

  return (
    <div id="home" className="tab">
      <div>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGoftU3F2ulmQ/profile-displayphoto-shrink_400_400/0/1594969476593?e=1611792000&v=beta&t=UETnExG_wlTRokAXb6r5sBTjcdXvxbPAxNO7ja6qzG4" alt="profile" style={{borderRadius:"150px", width:"80%"}} />
      </div>
      <div style={{width:"40%"}}>
        <Typography style={{fontSize: "2.4rem"}}>Lauren Emick</Typography>
        <br />
        <Typography style={{fontSize: "1.4rem"}}>Full Stack Engineer Student at {lambdalink}.</Typography>
        <br />
        <Typography style={{fontSize: "1.4rem"}}>My background in programming, design, and business allows for a multidisciplinary approach to creating impactful solutions. My main tech stack is React.js, Python 3,  and Java.</Typography>
        <br />
        <Typography style={{fontSize: "1.4rem"}}>Feel free to reach out or learn more about my projects!</Typography> 
        <br />
        <br />
        <Button size="large" color="secondary" underline="none" style={{border:"1px solid black", padding:".5%"}}><Link className="link" style={{fontSize:"1.4rem", padding:"2px 4px"}} to="/projects">Projects</Link></Button>
      </div>
    </div>
  );
};

export default Home;