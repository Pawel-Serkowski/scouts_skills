import React from "react";
import { useParams } from "react-router-dom";

import GroupSkillsScroller from "../Components/GroupSkillsScroller";
import GroupSkillsViewer from "../Components/GroupSkillsViewer";

import { group_skill_task_giver } from "../../shared/util/data-giver";
import "./GroupSkillsPage.css";

const SkillsPage = () => {
  const skillId = useParams().id;

  return (
    <section className="skills-page__container">
      <GroupSkillsViewer
        skill={group_skill_task_giver(skillId)}
        isActive={group_skill_task_giver(skillId) ? true : false}
      />
      <GroupSkillsScroller />
    </section>
  );
};

export default SkillsPage;
