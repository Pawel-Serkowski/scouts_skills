import React from "react";

import { task_creator } from "../utils/task-creator";

import "./SkillsViewer.css";

const SkillsViewer = (props) => {
  const nazwa = props.skill ? props.skill.nazwa.split("/") : ["", ""];

  return (
    <section
      className={`skills-viewer__container ${props.isActive ? "active" : ""}`}
    >
      {props.skill ? (
        <React.Fragment>
          {" "}
          <header className="skills-viewer__header">
            <div className="skills-viewer__cross" onClick={props.action}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="skills-viewer__title">
              <h2>{nazwa[0]}</h2>
              {nazwa[1] ? <h2>{nazwa[1]}</h2> : <p></p>}
            </div>
            <div className="skills-viewer__level">
              <h2>{props.skill.trudnosc}</h2>
            </div>
          </header>
          <div className="skills-viewer__content" id="skills-viewer">
            <section className="skills-viewer__tasks">
              <h1>Zadania:</h1>
              {props.skill.zadania.map((task) => (
                <div className="skills-viewer__task" key={task}>
                  {task_creator(task)}
                </div>
              ))}
            </section>
            <section className="skills-viewer__description">
              <div className="img-box">
                <img src={require(`../../shared${props.skill.img}`)} alt="" />
              </div>
              <p className="skills-viewer__idea">{props.skill.idea}</p>
              {props.isActive ? (
                <section className="skills-viewer__tasks">
                  <h1>Zadania:</h1>
                  {props.skill.zadania.map((task) => (
                    <div key={task} className="skills-viewer__task">
                      {
                        <div className="skills-viewer__task" key={task}>
                          {task_creator(task)}
                        </div>
                      }
                    </div>
                  ))}
                </section>
              ) : null}
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
