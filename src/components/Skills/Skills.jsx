import React from "react";
import "./Skills.css";
import SkillItems from "./SkillItems";
import htmlImage from "../../assets/html-logo.png";
import cssImage from "../../assets/css-logo.png";
import jsImage from "../../assets/js-logo.png";
import reactImage from "../../assets/react-logo.png";
import gitImage from "../../assets/git-logo.png";
import cppImage from "../../assets/cpp-logo.png";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>

      <div className="skill-box">
        <SkillItems skillName="HTML" imgSrc={htmlImage} styleName="html" percentage="90%" />
        <SkillItems skillName="CSS" imgSrc={cssImage} styleName="css" percentage="80%" />
        <SkillItems skillName="JavaScript" imgSrc={jsImage} styleName="js" percentage="70%" />
        <SkillItems skillName="React" imgSrc={reactImage} styleName="react" percentage="60%" />
        <SkillItems skillName="C++" imgSrc={cppImage} styleName="cpp" percentage="90%" />
        <SkillItems skillName="GitHub" imgSrc={gitImage} styleName="git" percentage="70%" />
      </div>
    </div>
  );
}

export default Skills;
