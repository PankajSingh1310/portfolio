import React from "react";
import "./Home.css";
import profile from "../../assets/profile.png";

function Home() {
    return (
        <div id="home">

            <div id="white-box">

                <div className="about-me">
                    <h2>I am Pankaj Singh</h2>
                    <p>and I'm a <span>Full Stack <br />Web Developers</span></p>
                </div>

                <div className="home-right">
                    <div id="circle" data-aos="zoom-in"></div>
                    <img src={profile} alt="Me" className="main-image" />
                </div>

            </div>

        </div>
    );
}

export default Home;
