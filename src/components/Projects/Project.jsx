import React, {useEffect} from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";
import Temperature from '../../assets/temp-conv.png'
import FoodDelivery from '../../assets/foodDelivery.png'
import Portfolio from '../../assets/portfolio.png'

function Project() {

  const temperatureDesc = "Temperature Converter is build using HTML, CSS and JavaScript, It has functionalities to convert temperatures between Celsius, Fahrenheit and Kelvin with the convenience of a clear reset option."
  const temperatureProjLink = "https://pankajsingh1310.github.io/codealpha_tasks/"

  const foodDesc = "Food Delivery web app is build using React. It is just the frontend model of a delivery website with all the functionalities such as filtering of food based on category, view menu and a add to cart functionality as well."
  const foodProjLink = "https://food-delivery-nu-kohl.vercel.app/"
  
  const portfolioDesc = "Personal Portfolio web app is build using React. Here you can find out everything about me. This website comprises of my experiences, skills and all the projects that I have created in my journey so far."
  const portfolioProjLink = "https://portfolio-omega-five-87.vercel.app/"

  

  return (
    <div className="project-container" id="project">
      <h1>Projects</h1>

      <div className="project-items">
        <ProjectItem imgSrc={Temperature} projName="Temperature Converter" description={temperatureDesc} projectLink={temperatureProjLink}/>
        <ProjectItem imgSrc={FoodDelivery} projName="Food Delivery" description={foodDesc} projectLink={foodProjLink}/>
        <ProjectItem imgSrc={Portfolio} projName="Personal Portfolio" description={portfolioDesc} projectLink={portfolioProjLink}/>
      </div>
    </div>
  );
}

export default Project;
