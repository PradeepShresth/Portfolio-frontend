import React from 'react';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="#skills">SKILLS</a>
            </li>
            <li>
                <a href="#projects">PROJECTS</a>
            </li>
            <li>
                <a href="#git-projects">GIT LINKS</a>
            </li>
            <form onSubmit={props.showButtons}>
                <button className="show-button"></button>
            </form>
            
        </ul>
    )
}

export default NavLinks;