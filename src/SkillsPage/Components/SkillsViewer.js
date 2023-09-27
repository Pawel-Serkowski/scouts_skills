import React from "react";
import { Link } from "react-router-dom";

import { task_creator } from "../../shared/util/task-creator";

import "./SkillsViewer.css";

const SkillsViewer = (props) => {
  const skill = props.skill;
  let title;
  if (skill) {
    title = skill ? skill.title.split("/") : ["", ""];
    console.log(skill.img);
  }

  return (
    <section
      className={`skills-viewer__container ${props.isActive ? "active" : ""}`}
    >
      {skill ? (
        <React.Fragment>
          <header className="skills-viewer__header">
            <Link className="skills-viewer__cross" to="/sprawnosci/">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <div className="skills-viewer__title">
              <h2>{title[0]}</h2>
              {title[1] ? <h2>{title[1]}</h2> : <p></p>}
            </div>
            {skill.level !== "Z" ? (
              <div className="skills-viewer__level">
                <h2>{skill.level}</h2>
              </div>
            ) : (
              ""
            )}
          </header>
          <div className="skills-viewer__content" id="skills-viewer">
            <section className="skills-viewer__tasks">
              <h1>Zadania:</h1>
              {skill.tasks.map((task) => (
                <div className="skills-viewer__task" key={task}>
                  {task_creator(task)}
                </div>
              ))}
            </section>
            <section className="skills-viewer__description">
              <div className={`img-box ${skill.level}`}>
                <img src={`http://localhost:4000/${skill.img}`} alt="" />
              </div>
              <p className="skills-viewer__idea">{skill.idea}</p>
              <section className="skills-viewer__tasks">
                <h1>Zadania:</h1>
                {skill.tasks.map((task) => (
                  <div key={task} className="skills-viewer__task">
                    {
                      <div className="skills-viewer__task" key={task}>
                        {task_creator(task)}
                      </div>
                    }
                  </div>
                ))}
              </section>
            </section>
          </div>
        </React.Fragment>
      ) : (
        <h1 className="skills-viewer__nothing">nothing is selected</h1>
      )}
    </section>
  );
};

export default SkillsViewer;
