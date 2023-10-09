import React from "react";

import { Link } from "react-router-dom";

import { task_creator } from "../utils/task-creator";

import "./GroupSkillsViewer.css";

const SkillsViewer = (props) => {
  let title;
  if (props.skill) {
    title = props.skill ? props.skill.title.split("/") : ["", ""];
  }
  return (
    <section
      className={`group-skills-viewer__container ${
        props.isActive ? "active" : ""
      }`}
    >
      {props.skill ? (
        <React.Fragment>
          <header className="group-skills-viewer__header">
            <Link className="group-skills-viewer__cross" to="/tropy/">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <div className="group-skills-viewer__title">
              <h2>{title[0]}</h2>
              {title[1] ? <h2>{title[1]}</h2> : <p></p>}
            </div>
          </header>
          <div
            className="group-skills-viewer__content"
            id="group-skills-viewer"
          >
            <section className="group-skills-viewer__tasks">
              <h1>Zadania:</h1>
              {props.skill.tasks.map((task) => (
                <div className="group-skills-viewer__task" key={task}>
                  {task_creator(task)}
                </div>
              ))}
            </section>
            <section className="group-skills-viewer__description">
              <div className={`img-box ${props.skill._id[0]}`}>
                <img src={require(`../../shared${props.skill.img}`)} alt="" />
              </div>
              <p className="group-skills-viewer__idea">{props.skill.idea}</p>
              <section className="group-skills-viewer__tasks">
                <h1>Zadania:</h1>
                {props.skill.tasks.map((task) => (
                  <div key={task} className="group-skills-viewer__task">
                    {
                      <div className="group-skills-viewer__task" key={task}>
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
        <h1 className="group-skills-viewer__nothing">nothing is selected</h1>
      )}
    </section>
  );
};

export default SkillsViewer;
