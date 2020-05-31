import React from "react";

import Card from '../UIElements/Card';

import './ProjectItem.css';

const ProjectItem = props => {

    return (
        <React.Fragment>
            {props.projects.map(project => {
                return (
                    <li key={project.id} className="project-item">
                        <a href={project.link}>
                            <Card className="card-big">
                                <img className="project-image" src={`${process.env.REACT_APP_IMAGE_URL}/${project.image}`} alt="project_image" />
                                <h1>{project.title}</h1>
                            </Card>
                        </a>
                    </li>
                );
            })}
        </React.Fragment>
    )
}

export default ProjectItem;