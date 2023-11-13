import React, { useState, useRef } from "react";
import { task_creator } from "../utils/task-creator";

import SaveAsPdfButton from "./SaveAsPdfButton";
import "./Page.css";

const Page = (props) => {
  const id = useRef(-1);

  function create_task_view(list) {
    const new_tasks = [];
    list.forEach((task) => {
      id.current = id.current + 1;
      new_tasks.push({ id: id.current, task: task_creator(task) });
    });
    return new_tasks;
  }

  const skill = props.skill;
  const [isImgShow, setIsImgShow] = useState(true);
  const [tasks, setTasks] = useState(() => create_task_view(skill.tasks));
  const [editId, setEditId] = useState(-1);
  const [textareaValue, setTextareaValue] = useState("");

  const imgShowHandler = () => {
    setIsImgShow((state) => !state);
  };

  const addTaskHandler = () => {
    id.current = id.current + 1;
    setTasks((prev_state) => [
      ...prev_state,
      { id: id.current, task: "Jakieś zadanie" },
    ]);
    setEditId(id.current);
    setTextareaValue("");
  };

  const editTaskHandler = (task) => {
    setEditId(task.id);
    setTextareaValue(task.task);
  };
  const deleteTaskHandler = (id) => {
    const new_tasks = tasks.filter((t) => id !== t.id);
    setTasks(new_tasks);
  };
  const onChangeTextAreaHandler = (event) => {
    setTextareaValue(event.target.value);
  };
  const saveTaskHandler = (event) => {
    const new_tasks = tasks.map((t) => ({
      id: t.id,
      task: t.id === editId ? textareaValue : t.task,
    }));
    setTasks(new_tasks);
    setEditId(-1);
  };

  return (
    <React.Fragment>
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
                  <div className="task-content">
                    {editId !== task.id ? (
                      task.task
                    ) : (
                      <textarea
                        className="edit-task-area"
                        onChange={(event) => onChangeTextAreaHandler(event)}
                        value={textareaValue}
                      ></textarea>
                    )}
                  </div>
                  <div className="task-configuration-buttons">
                    {editId !== task.id ? (
                      <button
                        className="task-button edit"
                        onClick={() => editTaskHandler(task)}
                      >
                        <i className="fa-solid fa-pencil"></i> Edytuj
                      </button>
                    ) : (
                      <button
                        className="task-button save"
                        onClick={(event) => saveTaskHandler(event)}
                      >
                        <i className="fa-solid fa-pencil"></i> Zapisz
                      </button>
                    )}
                    <button
                      className="task-button delete"
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
        <SaveAsPdfButton />
      </section>
    </React.Fragment>
  );
};

export default Page;
