import React from "react";
import "./About.css";
import myPic from "../../assets/resume-pic.jpg";

function About() {
  return (
    <div id="about">

      <h1>About</h1>

      <div className="aboutContainer">

        <div className="aboutLeft">        

          <p className="textBox">
            <p>To leverage my expertise in software engineering to contribute to innovative projects and collaborate with a dynamic team in achieving technological excellence.</p>
          </p>

          <img className="myImage" src={myPic} alt="myPic" />

        </div>

        <div className="aboutRight">

            <h2>Pankaj Singh</h2>
            <h3>Software Engineer</h3>

            <div className="details">
              <p>B.Tech : Poornima College of Engineering</p>
              <p>Branch : CSE ( AI )</p>
              <p></p>
            </div>
        </div>

      </div>

    </div>
  );
}

export default About;
About;
