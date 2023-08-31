import React from "react";

import Button from "../../shared/forms/Button/Button";
import "./WelcomePage.css";

import CircleImage from "../../shared/img/circle.svg";
import TriangleImage from "../../shared/img/triangle.svg";

const WelcomePage = () => {
   return (
      <section className="welcome-page__container">
         <header className="welcome-page__heading">
            <h1>Tropy</h1>
            <div className="quote_block">
               <h3 className="quote_text">
                  <q>Współpraca to siła napędowa wielkich osiągnięć.</q>
               </h3>
               <span className="quote_author"> ~John C. Maxwell</span>
            </div>
            <div className="shape_icons">
               {/* <img src={CircleImage} alt="Sprawności Harcerskie" /> */}
               <img src={TriangleImage} alt="Tropy Zuchowe" />
            </div>
         </header>
         <header className="welcome-page__heading">
            <h1>Sprawności</h1>
            <div className="quote_block">
               <h3 className="quote_text">
                  <q>
                     Rozwój to nie końcowy cel, lecz nieustający proces
                     doskonalenia siebie.
                  </q>
               </h3>
               <span className="quote_author"> ~Tony Robbins</span>
            </div>
            <div className="shape_icons">
               <img src={CircleImage} alt="Sprawności Harcerskie" />
               <img src={TriangleImage} alt="Sprawności Zuchowe" />
            </div>
         </header>
      </section>
   );
};

export default WelcomePage;

// <div className="empty"></div>
// <div className="organizer">
//   <h1>
//     Poszukujesz sprawności dla siebie? <br></br>
//     Sprawdź wśród około 481 wyzwań. Może któreś akurat dla Ciebie!
//   </h1>
//   <Button to="/sprawnosci" active_text="dark" styles="lg up-slide">
//     Sprawdź
//   </Button>
// </div>
// {/* <SmoothScroll to={"TypesPage"} time={500}/> */}
