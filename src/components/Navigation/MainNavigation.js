import React from 'react';

import MainHeader from './MainHeader';
import NavLink from './NavLinks';

import './MainNavigation.css';

const MainNavigation = props => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            {props.banner &&
                <a href="/">
                    <div className="main-navigation__menu-title">
                        <div className="nav-img">
                            <img src={`http://localhost:8080/${props.banner.image}`} alt="profile"  />
                        </div>
                        <div>
                            <h1>
                                {props.banner.name}
                            </h1>
                            <p>{props.banner.profession}</p>
                        </div>
                    </div>
                </a>
            }
            <nav>
                <NavLink showButtons={props.showButtons} />
            </nav>
        </MainHeader>
    )
}

export default MainNavigation;