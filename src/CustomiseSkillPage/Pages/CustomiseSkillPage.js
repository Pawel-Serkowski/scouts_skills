import React from "react";
import { useParams } from "react-router-dom";

import { task_giver } from "../../shared/util/data-giver";

import "./CustomiseSkillPage.css";
import Page from "../Components/Page";

const CustomiseSkillPage = () => {
  const id = useParams().id;
  const skill = task_giver(id);
  return (
    <section className="customise-skill-page__container">
      <Page skill={skill} />
    </section>
  );
};

export default CustomiseSkillPage;
