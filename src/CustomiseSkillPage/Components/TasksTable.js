import React, { useState, useRef } from "react";
import { task_creator } from "../utils/task-creator";

const TasksTable = (props) => {
  const id = useRef(-1);

  const skill = props.skill;

  const [tasks, setTasks] = useState(() => create_task_view(skill.tasks));
  const [editId, setEditId] = useState(-1);
  const [textareaValue, setTextareaValue] = useState("");

  function create_task_view(list) {
    const new_tasks = [];
    list.forEach((task) => {
      id.current = id.current + 1;
      new_tasks.push({ id: id.current, task: task_creator(task) });
    });
    return new_tasks;
  }

  const addTaskHandler = () => {
    id.current = id.current + 1;
    setTasks((prev_state) => [...prev_state, { id: id.current, task: "" }]);
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
    <section className="customise-skill-page__tasks-viewer">
      <h2>Konfiguracja Zadań</h2>
      <ol className="customise-skill-page__tasks-list">
        <li>
          <div className="task-content">Zadanie</div>
          <div className="task-configuration-buttons">Data i podpis</div>
        </li>
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
              {!props.isDownloading ? (
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
              ) : (
                <div className="task-configuration-buttons"></div>
              )}
            </li>
          ))}
      </ol>

      {!props.isDownloading && (
        <button className="add-task" onClick={addTaskHandler}>
          <i className="fa-solid fa-plus"></i> Dodaj zadanie
        </button>
      )}
    </section>
  );
};

export default TasksTable;
