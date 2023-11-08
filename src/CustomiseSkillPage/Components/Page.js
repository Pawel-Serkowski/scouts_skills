import React, { useState } from "react";

import "./Page.css";

const Page = (props) => {
  const skill = props.skill;
  const [isImgShow, setIsImgShow] = useState(true);
  const [tasks, setTasks] = useState(skill.tasks);

  const imgShowHandler = () => {
    setIsImgShow((state) => !state);
  };

  const deleteTaskHandler = (task) => {
    const index = tasks.indexOf(task);
    console.log(index);
    console.log(task);
    if (index === -1) return;
    const new_tasks = tasks.filter((t) => t !== task);
    setTasks(new_tasks);
  };

  return (
    <section className="customise-skill-page__page">
      <h1>KARTA PRÓBY NA SPRAWNOŚĆ</h1>
      <header className="customise-skill-page__details">
        <section className="customise-skill-page__details-content">
          <label>Nazwa sprawności</label>
          <p className="customise-skill-page_skill-title">
            {skill.title}
            {skill.level}
          </p>
          <label htmlFor="name">Imię i nazwisko</label>
          <input type="text" id="name" />
          <label htmlFor="degree">Stopień</label>
          <input type="text" id="degree" />
          <label htmlFor="function">Funkcja</label>
          <input type="text" id="function" />
          <label htmlFor="team">Jednostka</label>
          <input type="text" id="team" />
        </section>
        <section className="customise-skill-page__general">
          <label htmlFor="open-date">Data Otwarcia</label>
          <input type="text" id="open-date" className="date-input" />
          <div
            className={`customise-skill-page__general-img-box ${
              isImgShow ? "show" : "hide"
            }`}
            onClick={imgShowHandler}
          >
            <img src={require(`../../shared${skill.img}`)} alt="" />
          </div>
          <p>
            Kliknij w{" "}
            {isImgShow ? "zdjęcie aby schować " : "okrąg aby pokazać "}
            logo sprawności
          </p>
        </section>
      </header>
      <section className="customise-skill-page__tasks-viewer">
        <h2>Konfiguracja Zadań</h2>
        <ol className="customise-skill-page__tasks-list">
          {tasks.map((task) => (
            <li key={task}>
              <div className="task-content">{task}</div>
              <div className="task-configuration-buttons">
                <button
                  className="task-delete-button"
                  onClick={() => deleteTaskHandler(task)}
                >
                  <i className="fa-solid fa-trash"></i> Usuń
                </button>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
};

export default Page;
