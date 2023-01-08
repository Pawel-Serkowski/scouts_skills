import React from 'react';

import SmoothScroll from '../../shared/ui/SmothScroller/SmothScroller';
import Button from '../../shared/forms/Button/Button';
import "./WelcomePage.css"

const WelcomePage = () =>{

    return(
        <section className="welcome-page__container">
            <h1>Poszukujesz sprawności dla siebie? <br></br>
                Sprawdź wśród około 481 wyzwań. Może któreś akurat dla Ciebie!
            </h1>
            <Button to="/sprawnosci" active_text="dark" styles="lg " >Sprawdź</Button>
            <SmoothScroll to={"TypesPage"} time={500}/>
        </section>
    )
};

export default WelcomePage;