import React, { useState } from "react";

import { filter } from "../utils/filter";

import FilterCard from "./FilterCard";
import TitleFinder from "./TitleFinder";

import "./SkillsScroller.css";

const SkillsScroller = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState(() => filter(props.action));

  const filterChangeHandler = () => {
    setTasks(filter(props.action));
  };

  const filterIsOpenHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="skills-scroller__container">
      <FilterCard
        action={filterIsOpenHandler}
        isActive={isActive ? "active" : ""}
        fuc={filterChangeHandler}
      />
      <TitleFinder
        filterChangeHandler={filterChangeHandler}
        filterIsOpenHandler={filterIsOpenHandler}
      />
      <section className="skills-scroller__card-box">
        {!tasks ? <h2>LOL</h2> : tasks}
      </section>
    </section>
  );
};

export default SkillsScroller;
