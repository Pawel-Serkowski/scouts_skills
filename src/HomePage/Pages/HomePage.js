import React from 'react';

import WelcomePage from '../Components/WelcomePage';
import TypesPage from '../Components/TypesPage';
import "./HomePage.css"

const HomePage = () => {


    return(
        <React.Fragment>
            <WelcomePage/>
            <TypesPage/>
        </React.Fragment>
    )
}

export default HomePage