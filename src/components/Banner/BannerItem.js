import React from "react";

import './BannerItem.css';

const BannerItem = props => {
    return (
        <React.Fragment>
            {!props.show && props.banner && ( 
                <div>
                    <div className="banner-contain banner-profile">
                        <div><img className="profile-img" src={`http://localhost:8080/${props.banner.image}`} alt="profile" /></div>
                    </div>
                    <div className="banner-contain banner-info">
                        <div>
                            <h3>Hello. I'm</h3>
                            <h1>{props.banner.name}</h1>
                            <p>{props.banner.profession}</p>
                            <ul>
                                {/* {props.banner.fbLink && */}
                                    <li>
                                        <span><a href={props.banner.fbLink} className="fa fa-facebook"></a></span>
                                    </li>
                                {/* } */}
                                {/* {props.banner.instaLink && */}
                                    <li>
                                        <span><a href={props.banner.instaLink} className="fa fa-instagram"></a></span>
                                    </li>
                                {/* } */}
                                {/* {props.banner.twitterLink && */}
                                    <li>
                                        <span><a href={props.banner.twitterLink} className="fa fa-twitter"></a></span>
                                    </li>
                                {/* } */}
                                {/* {props.banner.linkedLink && */}
                                    <li>
                                        <span><a href={props.banner.linkedLink} className="fa fa-linkedin"></a></span>
                                    </li>
                                {/* } */}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default BannerItem;