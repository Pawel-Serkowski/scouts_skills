import React from 'react';

import "./MainHeader.css"

const MainHeader = (props) => {

    return(
        <header className={`main-header ${props.isSide}`}>{props.children}</header>
    );
};

export default MainHeader;