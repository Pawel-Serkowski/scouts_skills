import data from "./sprawnosci-data.json";
import group_data from "./tropy-data.json";

export const types_giver = () => {
  const general_data = data;
  let general_types = [];
  let isInGeneral = {};

  for (let i = 0; i < general_data.length; i++) {
    if (isInGeneral[general_data[i].type] !== 1) {
      general_types.push(general_data[i].type);
      isInGeneral[general_data[i].type] = 1;
    }
  }
  // types = {
  //     Zaradność Życiowa: "",
  // }

  return general_types;
};

// export const data_giver = (data,how_many_per_page, page = 0) => {
//   const general_data = data;
//   if (how_many_per_page === -1) {
//     how_many_per_page = general_data.length;
//     page = 1;
//   }
//   let tasks = [];
//   try {
//     for (
//       let i = (page - 1) * how_many_per_page;
//       i < page * how_many_per_page;
//       i++
//     ) {
//       if (!general_data[i]) break;
//       tasks.push(general_data[i]);
//     }
//   } catch (e) {
//     console.log(e);
//   }
//   return tasks;
// };

export const task_giver = (id) => {
  const general_data = data;
  const skill = general_data.filter((s) => `${s._id} ` === `${id} `);
  return skill[0];
};

export const group_skill_task_giver = (id) => {
  const general_data = group_data;
  const group_skill = general_data.filter((s) => `${s._id} ` === `${id} `);
  return group_skill[0];
};

export const group_skills_data_giver = (how_many_per_page, page = 0) => {
  const general_data = group_data;
  if (how_many_per_page === -1) {
    how_many_per_page = general_data.length;
    page = 1;
  }
  let tasks = [];
  try {
    for (
      let i = (page - 1) * how_many_per_page;
      i < page * how_many_per_page;
      i++
    ) {
      if (!general_data[i]) break;
      tasks.push(general_data[i]);
    }
  } catch (e) {
    console.log(e);
  }
  return tasks;
};

export const group_skills_types_giver = () => {
  const general_data = group_data;
  let general_types = [];
  let isInGeneral = {};

  for (let i = 0; i < general_data.length; i++) {
    if (isInGeneral[general_data[i].typ] !== 1) {
      general_types.push(general_data[i].typ);
      isInGeneral[general_data[i].typ] = 1;
    }
  }
  // types = {
  //     Zaradność Życiowa: "",
  // }

  return general_types;
};
