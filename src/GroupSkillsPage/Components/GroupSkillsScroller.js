import React, { useState } from "react";

import { filter } from "../utils/filter";

import FilterCard from "./FilterCard";
import TitleFinder from "./TitleFinder";

import "./GroupSkillsScroller.css";

const SkillsScroller = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState(() => filter());

  const filterChangeHandler = () => {
    setTasks(filter());
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
        {!tasks ? (
          <h2>LOL, napisz asap do pawel.serkowski@zhp.net.pl</h2>
        ) : (
          tasks
        )}
      </section>
    </section>
  );
};

export default SkillsScroller;
