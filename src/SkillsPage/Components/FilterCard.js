import React from "react";
import "../../shared/styles/FilterCard.css";
import { types_giver } from "../../shared/util/data-giver";

const FilterCard = (props) => {
  const types = types_giver();

  return (
    <section
      className={`filter-card__container ${props.isActive ? "active" : ""}`}
    >
      <div className="skills-viewer__cross" onClick={props.action}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="filter-card__box">
        <h2>Wybierz metodyke </h2>
        <select id="methods" onChange={props.fuc}>
          <option value="">Wszystkie</option>
          <option value="Z">Zuchowa</option>
          <option value="H">Harcerska</option>
          <option value="HS">Starszoharcerska</option>
          <option value="W">Wędrownicza</option>
        </select>
      </div>
      <div className="filter-card__box">
        <h2>Wybierz kategorie </h2>
        <select id="category" onChange={props.fuc}>
          <option value="">Wszystkie</option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-card__box">
        <h2>Wybierz trudność </h2>
        <select id="level" onChange={props.fuc}>
          <option value="">Wszystkie</option>
          <option value="Z">Zuch</option>
          <option value="*">*</option>
          <option value="**">**</option>
          <option value="***">***</option>
          <option value="****">****</option>
        </select>
      </div>
    </section>
  );
};

export default FilterCard;
