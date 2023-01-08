import React from 'react';

import Card from '../../shared/ui/Card/Card';
// import { types_giver } from '../../shared/util/data-giver';
import "./TypesPage.css"

const TypesPage = () => {

    // console.log(types_giver());

    return(
        <section id="TypesPage" className="types-page">
            <h1>Znajdź swój ulubiony typ sprawności</h1>
            <div className='types-page__cards-box'><Card>AAA</Card></div>
        </section>
    )
}

export default TypesPage;