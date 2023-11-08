import React, { useState, useRef } from "react";

import "./Page.css";

const Page = (props) => {
  const id = useRef(0);

  function create_task_view(list) {
    const new_tasks = [];
    list.forEach((task) => {
      new_tasks.push({ id: id.current, task: task });
      id.current = id.current + 1;
    });
    console.log(new_tasks);
  }

  const skill = props.skill;
  const [isImgShow, setIsImgShow] = useState(true);
  const [tasks, setTasks] = useState(create_task_view(skill.tasks));

  const imgShowHandler = () => {
    setIsImgShow((state) => !state);
  };

  const addTaskHandler = () => {
    setTasks((prev_state) => [...prev_state, "Jakieś zadanie"]);
  };

  const deleteTaskHandler = (id) => {
    const new_tasks = tasks.filter((t) => id !== t.id);
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
          {tasks &&
            tasks.map((task) => (
              <li key={task.id}>
                <div className="task-content">{task.task}</div>
                <div className="task-configuration-buttons">
                  <button
                    className="task-delete-button"
                    onClick={() => deleteTaskHandler(task.id)}
                  >
                    <i className="fa-solid fa-trash"></i> Usuń
                  </button>
                </div>
              </li>
            ))}
        </ol>

        <button className="add-task" onClick={addTaskHandler}>
          <i className="fa-solid fa-plus"></i> Dodaj zadanie
        </button>
      </section>
    </section>
  );
};

export default Page;
