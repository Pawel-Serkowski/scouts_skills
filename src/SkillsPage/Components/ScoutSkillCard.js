import React from "react";
import { Link } from "react-router-dom";

import "./SkillCard.css";

const ScoutSkillCard = (props) => {
  const title = props.skill ? props.skill.title.split("/") : ["", ""];

  return (
    <Link
      to={`/sprawnosci/${props.skill._id}`}
      className="skill-card__container"
    >
      <div className="img-box">
        <img src={require(`../../shared${props.skill.img}`)} alt="" />
      </div>
      <div className="skill-card__title">
        <h2>{title[0]}</h2>
        {title[1] ? <h2 key={title[1]}>{title[1]}</h2> : <p key={title[0]}></p>}
      </div>
      <div className="skill-card__description">
        <div className="skill-card__level">{props.skill.level}</div>
        <div className="skill-card__type">{props.skill.type}</div>
      </div>
    </Link>
  );
};

export default ScoutSkillCard;
