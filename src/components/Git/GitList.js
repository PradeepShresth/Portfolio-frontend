import React from "react";

import GitItem from './GitItem';

import './GitList.css';

const GitList = props => {
    return (
        <ul className="git-list">
            <div>
                <h1 className="git-list__title"><a id="git-projects">Git Projects</a></h1>
                {props.showButtons &&
                    <button 
                        className="git-btn"
                        onClick={props.added}
                    >
                        Add Gits
                    </button>
                }
            </div>
            <GitItem gits={props.gits} />
        </ul>
    );
}

export default GitList;