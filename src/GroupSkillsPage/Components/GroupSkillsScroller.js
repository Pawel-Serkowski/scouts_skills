import React, { useState } from "react";

import { filter } from "../utils/filter";

import FilterCard from "./FilterCard";
import TitleFinder from "../../shared/components/TitleFinder/TitleFinder";

import GroupScoutLittleSkillCard from "./GroupScoutLittleSkillCard";
// import GroupScoutSkillCard from "./GroupScoutSkillCard";

import "./GroupSkillsScroller.css";

const SkillsScroller = () => {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState(() => filter());

  const filterChangeHandler = () => {
    setTasks(filter());
  };

  const filterIsOpenHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="group-skills-scroller__container">
      <FilterCard
        action={filterIsOpenHandler}
        isActive={isActive ? "active" : ""}
        fuc={filterChangeHandler}
      />
      <TitleFinder
        filterChangeHandler={filterChangeHandler}
        filterIsOpenHandler={filterIsOpenHandler}
      />
      <section className="group-skills-scroller__card-box">
        {tasks.length === 0 ? (
          <div className="nothing-found">
            <img
              src={require("../../shared/img/searching.png")}
              alt="Cannot find skills"
            />

            <span>Nie znaleziono sprawności...</span>
          </div>
        ) : (
          tasks.map((skill) => {
            return <GroupScoutLittleSkillCard skill={skill} key={skill._id} />;
          })
        )}
      </section>
    </section>
  );
};

export default SkillsScroller;
