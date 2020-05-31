import React from "react";

import Card from '../UIElements/Card';

import './GitItem.css';

const GitItem = props => {
    return (
        <React.Fragment>
            {props.gits.map(git => {
                return (
                    <li key={git.id} className="git-item">
                        <a href={git.link}>
                            <Card className="card-medium">
                                <div>
                                    <h1>{git.title}</h1>
                                    <p>{git.link}</p>
                                </div>
                            </Card>
                        </a>
                    </li>
                );
            })}
        </React.Fragment>
    )
}

export default GitItem;