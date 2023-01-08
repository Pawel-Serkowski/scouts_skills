import React from "react";
import { Link } from "react-router-dom";

import "./Button.css"

const Button = (props) => {
    return(
        <Link to={props.to}>
            <div className={`button ${props.styles} ${props.animation} ${props.active_text} ${props.background}`}>
                {props.children}
            </div>
        </Link>
    )
}

export default Button;