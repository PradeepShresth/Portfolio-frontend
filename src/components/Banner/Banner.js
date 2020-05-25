import React, {Component} from 'react';

import BannerItem from './BannerItem';

import './Banner.css';

class Banner extends Component {

    render () {
        let button;
        if (this.props.show) {
            button = (
                <button 
                    className="banner-btn"
                    onClick={this.props.added}
                >
                    Add Banner
                </button>
            )
        }
         return(
            <React.Fragment>
                <div className="Banner">
                    <div className="banner-content">
                        <BannerItem banner={this.props.banner} showBanner={this.props.show} />
                    </div>
                    {button}
                </div>
                
            </React.Fragment>
        )
    }
}

export default Banner;