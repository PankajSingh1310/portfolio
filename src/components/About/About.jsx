import React from "react";
import "./About.css";
import myPic from "../../assets/resume-pic.jpg";

function About() {
  return (
    <div id="about">

      <h1>About</h1>

      <div className="aboutContainer" data-aos="fade-up">

        <div className="aboutLeft">        

          <div className="textBox">
            <p>To leverage my expertise in software engineering to contribute to innovative projects and collaborate with a dynamic team in achieving technological excellence.</p>
          </div>

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

            <div className="mainDetails">
             
              <div className="priDetails mainBox">
                  <h3>2021</h3>
                  <div className="firstDetail detailBox">
                    <p>Started to learn about the Web Dev Technologies</p>
                  </div>
                  <div className="secondDetail detailBox"></div>
              </div>

              <div className="secDetails mainBox">
                  <div className="thirdDetail detailBox"></div>
                  <div className="fourthDetail detailBox"></div>
              </div>

            </div>
        </div>

      </div>

    </div>
  );
}

export default About;
About;
