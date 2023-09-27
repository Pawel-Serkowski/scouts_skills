import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SkillsScroller from "../Components/SkillsScroller";
import SkillsViewer from "../Components/SkillsViewer";

import { filter } from "../utils/filter";
import "./SkillsPage.css";

const SkillsPage = () => {
  const skillId = useParams().id;
  const [filteredData, setFilteredData] = useState([]);
  const data = useRef([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/sprawnosci`)
      .then((response) => {
        data.current = response.data;
        setFilteredData(filter(response.data));
      })
      .catch((error) => {
        console.log(error);
        data.current = [];
      });
  }, []);

  const filterChangeHandler = () => {
    setFilteredData(filter(data.current));
  };

  return (
    <section className="skills-page__container">
      <SkillsViewer
        skill={
          data.current.filter(
            (skill) => String(skill._id) === String(skillId)
          )[0]
        }
        isActive={skillId ? true : false}
      />
      <SkillsScroller
        skills_data={filteredData}
        filterChangeHandler={filterChangeHandler}
      />
    </section>
  );
};

export default SkillsPage;
