const task_creator = (task) => {
  let general = task.split("$");
  let new_task = general[0];
  if (general.length < 2) return general[0];
  general = general.slice(1);
  general = general[0].split("-");
  general.slice(1).forEach((element) => {
    new_task += "\n - " + element;
  });

  return new_task;
};

export { task_creator };
