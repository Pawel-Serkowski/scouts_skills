import React from "react";
import ScoutLittleSkillCard from "./ScoutLittleSkillCard";
import ScoutSkillCard from "./ScoutSkillCard";

const SkillsCards = (props) => {
  return props.tasks.map((skill) => {
    if (skill._id[0] === "z") {
      return <ScoutLittleSkillCard skill={skill} key={skill._id} />;
    }
    return <ScoutSkillCard skill={skill} key={skill._id} />;
  });
};

export default SkillsCards;
