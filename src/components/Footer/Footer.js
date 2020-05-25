import React from "react";

import './Footer.css';

const Footer = props => {
    return (
        <React.Fragment>
            {!props.showBanner && props.banner && ( 
                <footer>
                    <div className="footer-about">
                        <h1>ABOUT ME</h1>
                        <p>
                            Etiam tempus ornare libero, sit amet pretium tellus sagittis vel. Vestibulum porta sodales ornare. Nulla tincidunt non tellus quis bibendum. Vivamus nisl lacus, varius vel tempor eu, aliquam in velit. Sed vel odio at nisl mollis tincidunt quis fringilla dui. Duis quis lectus ut elit iaculis sodales ut sit amet est. Cras sed enim ut ipsum consectetur luctus ut eget neque. Sed eget varius felis, at posuere turpis. Phasellus placerat lectus vel consectetur dignissim. Duis malesuada ipsum velit, eu fermentum nulla ultricies a. Etiam sit amet ornare massa. Duis vitae tempor nisl. Nullam id elementum nisi, a scelerisque odio.
                        </p>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <li>
                                <p><i className="fa fa-map-marker"></i></p>
                                <p>{props.banner.address}</p>
                            </li>
                            <li>
                                <p><i className="fa fa-phone"></i></p>
                                <p>{props.banner.phone}</p>
                            </li>
                            <li>
                                <p><i className="fa fa-envelope"></i></p>
                                <p>{props.banner.email}</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            )}
        </React.Fragment>
    )
}

export default Footer;