import React from "react";

import "./ContactPage.css";

const ContactPage = () => {


    return(
        <section className="contact-page__container">
            <h2>Chcesz się skontaktować?</h2>
            <div className="contact-page__text">
                <p>Cześć, mam na imie Paweł i jestem drużynowym gromady zuchowej. Bardzo dużo pracy włożyłem w tą aplikacje webową, a moim celem było dać każdemu możliwość swobodnego i prostego przeglądania sprawności harcerskich z nowego simu. Jeśli zauważyłeś/aś jakiś błąd / problem / masz sugestie jak mogę poprawić stronę lub chcesz mnie jakoś wesprzeć w pracy, proszę napisz do mnie. </p>
                <span> <i>Paweł</i></span>
            </div>

        </section>
    );
}

export default ContactPage