import React,{useState} from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css"


const MainNavigation = () => {

    // const [isSide,setIsSide] = useState(false);
    const [isActive,setIsActive] = useState();
    const menuHandler = () => {
        setIsActive(!isActive);
    }
    return(
        <MainHeader click={menuHandler}isSide={isActive?"open":""}>
            <div></div>
            <NavLinks isOpen = {isActive ? "open" : ""}/>
            <div  onClick={menuHandler} className={`main-navigation__menu-btn ${isActive ? 'active' : ""}`}>
                <span></span>
            </div>
        </MainHeader>

    )

};

export default MainNavigation;