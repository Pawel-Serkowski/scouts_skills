import React, { useState } from "react";

import FilterCard from "./FilterCard";
import TitleFinder from "./TitleFinder";

import { skills_data_to_components } from "../utils/data_to_components";

import "./SkillsScroller.css";

const SkillsScroller = (props) => {
  const [isActive, setIsActive] = useState(false);

  const filterIsOpenHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="skills-scroller__container">
      <FilterCard
        filterIsOpenHandler={filterIsOpenHandler}
        isActive={isActive ? "active" : ""}
        filterChangeHandler={props.filterChangeHandler}
      />
      <TitleFinder
        filterChangeHandler={props.filterChangeHandler}
        filterIsOpenHandler={filterIsOpenHandler}
      />
      <section className="skills-scroller__card-box">
        {Number(props.skills_data.length) === 0 ? (
          <h2>
            Nie widzisz sprawności? <br />
            Napisz jak najszybciej do pawel.serkowski@zhp.net.pl
          </h2>
        ) : (
          skills_data_to_components(props.skills_data)
        )}
      </section>
    </section>
  );
};

export default SkillsScroller;
