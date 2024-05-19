import React, {useEffect} from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";
import Temperature from '../../assets/temp-conv.png'

function Project() {

  const temperatureDesc = "Temperature Converter is build using HTML, CSS and JavaScript, It has functionalities to convert temperatures between Celsius, Fahrenheit and Kelvin with the convenience of a clear reset option."
  const temperatureProjLink = "https://pankajsingh1310.github.io/codealpha_tasks/"
  return (
    <div className="project-container" id="project">
      <h1>Projects</h1>

      <div className="project-items">
        <ProjectItem imgSrc={Temperature} projName="Temperature Converter" description={temperatureDesc} projectLink={temperatureProjLink}/>
        <ProjectItem imgSrc={Temperature} projName="Temperature Converter" description={temperatureDesc} projectLink={temperatureProjLink}/>
        <ProjectItem imgSrc={Temperature} projName="Temperature Converter" description={temperatureDesc} projectLink={temperatureProjLink}/>
      </div>
    </div>
  );
}

export default Project;
