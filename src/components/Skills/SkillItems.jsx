import React from "react";

function SkillItems(props) {
    return (
        <div className="boxes" data-aos="fade-up">
            <h3 className="skill-name">{props.skillName}</h3>
            <div className="container">
                <img className="image" src={props.imgSrc} alt="Image" />
                <div className={`hover-div ${props.styleName}`}>
                    <div className="text">{props.percentage}</div>
                </div>
            </div>
        </div>
    );
}

export default SkillItems;
