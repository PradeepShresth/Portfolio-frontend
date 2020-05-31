import React from "react";

import Card from '../UIElements/Card';

import './SkillItem.css';

const SkillItem = props => {

    return (
        <React.Fragment>
            {props.skills.map(skill => {
                return (
                    <li key={skill.id} className="skill-item">
                        <Card className="card-small">
                            <img className="skill-image" src={`${process.env.REACT_APP_IMAGE_URL}/${skill.image}`} alt="skill_image" />
                        </Card>
                    </li>
                );
            })}
        </React.Fragment>
    )
}

export default SkillItem;