import React from "react";

import SkillItem from './SkillItem';

import './SkillList.css';

const SkillList = props => {
    return (
        <ul className="skill-list">
            <div>
                <h1 className="skill-list__title"><a id="skills">Skills</a></h1>
                {props.showButtons &&
                    <button 
                        className="skill-btn"
                        onClick={props.added}
                    >
                        Add Skills
                    </button>
                }
            </div>
            <SkillItem skills={props.skills} />
        </ul>
    );
}

export default SkillList;