const task_creator = (task) => {
  let t_list = task.split("$");
  const tasks_list = [];
  t_list[0] += "$";
  tasks_list.push(t_list[0]);
  if (t_list.length > 1) {
    const temp_list = t_list[1].split("-");
    for (let i = 0; i < temp_list.length; i++) {
      if (temp_list[i] !== " ") tasks_list.push(temp_list[i]);
    }
  }

  return tasks_list.map((tasky) => {
    return (
      <p key={tasky} className={!tasky.includes("$") ? "under" : "main"}>
        <i className="fa-solid fa-feather-pointed"></i>{" "}
        {!tasky.includes("$") ? "- " : ""}
        {tasky.split("$")[0]}
      </p>
    );
  });
};

export { task_creator };
