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
                  <p className="year">2021</p>
                  <div className="firstDetail detailBox">
                    <p>I enrolled at Poornima College of Engineering and began learning web development technology, and successfuly able to complete HTML and CSS.</p>
                  </div>
                  <p className="year">2022</p>
                  <div className="secondDetail detailBox">
                    <p>"I started learning JavaScript and other front-end frameworks like React JS, as well as CSS frameworks like Tailwind and Bootstrap."</p>
                  </div>
              </div>

              <div className="secDetails mainBox">
                  <p className="year">2023</p>
                  <div className="thirdDetail detailBox">
                    <p>Engaged in an intensive 45 days Industrial Training program in MERN Stack at TechieNest Pvt. Ltd. (Learn and Build) (07 Aug 2023 - 20 Sep 2023).</p>
                  </div>
                  <p className="year">2024</p>
                  <div className="fourthDetail detailBox">
                    <p>I was recently selected for a React JS internship at Celebal Technologies and am looking forward to more opportunities in the future.</p>
                  </div>
              </div>

            </div>
        </div>

      </div>

    </div>
  );
}

export default About;
About;
