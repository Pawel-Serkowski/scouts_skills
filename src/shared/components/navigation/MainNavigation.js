import React,{useState} from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css"

const MainNavigation = () => {

    // const [isSide,setIsSide] = useState(false);
    const [isActive,setIsActive] = useState();

    const sidebar = document.getElementById('side-menu');
    window.document.addEventListener('click', (e) => {
        const clickedArea = e.path[e.path.length - 6];

        if ( clickedArea == sidebar) {
            if(!isActive){
                setIsActive(false);
            }
        }

    });

    const menuHandler = () => {
        setIsActive(!isActive);
    }
    return(
        <MainHeader>
            <div></div>
            <NavLinks  isOpen = {isActive ? "open" : ""}/>
            <div  onClick={menuHandler} className={`main-navigation__menu-btn ${isActive ? 'active' : ""}`}>
                <span></span>
            </div>
        </MainHeader>

    )

};

export default MainNavigation;