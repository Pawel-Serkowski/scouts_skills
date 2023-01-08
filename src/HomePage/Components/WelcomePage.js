import React from 'react';

import Button from '../../shared/forms/Button/Button';
import "./WelcomePage.css"

const WelcomePage = () =>{

    return(
        <section className="welcome-page__container">
            <h1>Poszukujesz sprawności dla siebie? <br></br>
                Sprawdź wśród około 481 wyzwań. Może któreś akurat dla Ciebie!
            </h1>
            <Button active_text="dark" styles="lg " >Sprawdź</Button>

        </section>
    )
};

export default WelcomePage;