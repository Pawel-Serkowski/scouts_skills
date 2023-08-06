import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul id="side-menu" className={`nav-links ${props.isOpen}`}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="sprawnosci">Sprawności</NavLink>
      </li>
      <li>
        <NavLink to="tropy">Tropy</NavLink>
      </li>
      {/* <li>
                <NavLink to="kontakt">Kontakt</NavLink>
            </li> */}
    </ul>
  );
};

export default NavLinks;
