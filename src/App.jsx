import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Landing/Home"
import Skills from "./components/Skills/Skills"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
// import Parallax from "./components/Parallax/Parallax";


function App() {

  useEffect(() => {
    AOS.init({duration: 1000});
}, []);

  return (
    <>
      <Navbar/>      
      <Home/>
      <Skills/>
      {/* <Parallax/> */}
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
