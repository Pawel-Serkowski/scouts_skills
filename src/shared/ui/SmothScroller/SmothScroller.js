import React from 'react';
import {Link as Link1} from "react-scroll";

import "./SmothScroller.css";

const SmoothScroll = props => {

    return(
        <Link1 to={props.to} duration={props.time} offset={200} smooth={true}>
            <div className="scroller-circle">
                <i className="fa-solid fa-arrow-down"></i>
            </div>
        </Link1>
    )
}

export default SmoothScroll;