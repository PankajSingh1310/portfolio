import React from "react";

function ProjectItem(props) {
    return (
        <div className="project-main-container" data-aos="fade-up">
            <div className="cta">
                <img src={props.imgSrc} alt=""/>
                <div className="project-text">
                    <h2>{props.projName}</h2>
                    <p>
                        {props.description}
                    </p>
                    <a href={props.projectLink} target="_blank">See Project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
