import React from "react";
import { Link } from "react-router-dom";

import "./SkillCard.css";

const ScoutSkillCard = (props) => {
  const nazwa = props.skill.nazwa.split("/");

  return (
    <Link
      to={`/sprawnosci/${props.skill._id}`}
      className="skill-card__container"
    >
      <div className="img-box">
        <img src={require(`../../shared${props.skill.img}`)} alt="" />
      </div>
      <div className="skill-card__title">
        <h2>{nazwa[0]}</h2>
        {nazwa[1] ? <h2 key={nazwa[1]}>{nazwa[1]}</h2> : <p key={nazwa[0]}></p>}
      </div>
      <div className="skill-card__description">
        <div className="skill-card__level">{props.skill.trudnosc}</div>
        <div className="skill-card__type">{props.skill.typ}</div>
      </div>
    </Link>
  );
};

export default ScoutSkillCard;
