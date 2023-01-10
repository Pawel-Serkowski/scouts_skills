import React from 'react';

import "./SkillCard.css";

const SkillCard = (props) => {

    const nazwa = props.skill.nazwa.split('/');

    return(
        <div className="skill-card__container" onClick={() => props.action(props.skill)}>
        <div className="img-box">
            <img src={require(`../../shared${props.skill.img}`)} alt=""/>
        </div>
        <div className="skill-card__title">
            <h2>{nazwa[0]}</h2>
            {nazwa[1] ? <h2>{nazwa[1]}</h2> : <p></p>}
        </div>
        <div className="skill-card__description">
            <div className='skill-card__level'>{props.skill.trudnosc}</div>
            <div className='skill-card__type'>{props.skill.typ}</div>
        </div>
    </div>
    )

}

export default SkillCard;