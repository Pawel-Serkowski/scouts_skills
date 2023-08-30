import React from "react";

import Button from "../../shared/forms/Button/Button";
import "./WelcomePage.css";

const WelcomePage = () => {
   return (
      <section className="welcome-page__container">
         <div className="organizer organizer1">
            <div className="layout"></div>
         </div>
         <div className="organizer organizer2">
            <div className="layout"></div>
         </div>
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
