import React from "react";

import ProjectItem from './ProjectItem';

import './ProjectList.css';

const ProjectList = props => {
    return (
        <ul className="project-list">
            <div>
                <h1 className="project-list__title"><a id="projects">Projects</a></h1>
                {props.showButtons &&
                    <button 
                        className="project-btn"
                        onClick={props.added}
                    >
                        Add Project
                    </button>
                }
            </div>
            <ProjectItem projects={props.projects} />
        </ul>
    );
}

export default ProjectList;