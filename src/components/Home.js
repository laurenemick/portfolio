import React from "react";

const Home = () => {
  const lambdalink = <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>;

  return (
    <div id="home" className="tab">
        <section id="aboutMe">
          <h1>Lauren Emick</h1>
          <p>Full Stack Engineer Student at {lambdalink}.</p>
          <p>I work to build impactful solutions in a clean, secure, and efficient way.</p> 
          <p>In addition to programming, I have experience in cybersecurity sales and web/product design environments.</p>
          <p>Feel free to email me to collaborate or learn more about my projects!</p> 
          {/* FIXME: profile pic and add to/edit bio*/}
        </section>

        <section id="recentProjects">
          <h3>Recent Projects</h3>
        </section>
    </div>
  );
};

export default Home;