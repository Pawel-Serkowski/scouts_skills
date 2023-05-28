import React from "react";
import { useParams } from "react-router-dom";

import SkillsScroller from "../Components/SkillsScroller";
import SkillsViewer from "../Components/SkillsViewer";

import { task_giver } from "../../shared/util/data-giver";
import "./SkillsPage.css";

const SkillsPage = () => {
  const skillId = useParams().id;

  return (
    <section className="skills-page__container">
      <SkillsViewer
        skill={task_giver(skillId)}
        isActive={task_giver(skillId) ? true : false}
      />
      <SkillsScroller />
    </section>
  );
};

export default SkillsPage;
