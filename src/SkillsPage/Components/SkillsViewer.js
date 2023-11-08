import React from "react";

import { Link } from "react-router-dom";

import { task_creator } from "../utils/task-creator";

import "./SkillsViewer.css";

const SkillsViewer = (props) => {
  let title;
  title = props.skill ? props.skill.title.split("/") : ["", ""];

  return (
    <section
      className={`skills-viewer__container ${props.isActive ? "active" : ""}`}
    >
      {props.skill ? (
        <React.Fragment>
          <header className="skills-viewer__header">
            <Link className="skills-viewer__cross" to="/sprawnosci/">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <div className="skills-viewer__title">
              <h2>{title[0]}</h2>
              {title[1] ? <h2>{title[1]}</h2> : <p></p>}
            </div>
            <div>
              <Link
                className="skills-viewer__print-box"
                to={`/sprawnosci/${props.skill._id}/edytuj`}
                target="_blank"
              >
                <i className="fa-solid fa-cloud-arrow-down"></i>
                <p>Edytuj i pobierz</p>
              </Link>
              {props.skill.level !== "Z" ? (
                <div className="skills-viewer__level">
                  <h2>{props.skill.level}</h2>
                </div>
              ) : (
                ""
              )}
            </div>
          </header>
          <div className="skills-viewer__content" id="skills-viewer">
            <section className="skills-viewer__tasks">
              <h1>Zadania:</h1>
              {props.skill.tasks.map((task) => (
                <div className="skills-viewer__task" key={task}>
                  {task_creator(task)}
                </div>
              ))}
            </section>
            <section className="skills-viewer__description">
              <div className={`img-box ${props.skill.level}`}>
                <img src={require(`../../shared${props.skill.img}`)} alt="" />
              </div>
              <p className="skills-viewer__idea">{props.skill.idea}</p>
              <section className="skills-viewer__tasks">
                <h1>Zadania:</h1>
                {props.skill.tasks.map((task) => (
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
