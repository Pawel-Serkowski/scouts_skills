import { group_skills_data_giver } from "../../shared/util/data-giver";
const filter = () => {
  try {
    const w = document.getElementById("title-filter").value;
    const m = document.getElementById("group-methods").value;
    const k = document.getElementById("group-category").value;
    const filtera = w.toLowerCase();

    if (filtera === "" && m === "" && k === "") {
      return group_skills_data_giver(-1);
    }

    const data = group_skills_data_giver(-1);

    let filtering = data;
    let option = [];
    if (m) {
      if (m === "Z") {
        option = ["Z"];
      } else if (m === "H") {
        option = ["*", "**"];
      } else if (m === "HS") {
        option = ["**", "***"];
      } else if (m === "W") {
        option = ["***", "****"];
      }
      filtering = filtering.filter(
        (skill) => skill.trudnosc === option[0] || skill.trudnosc === option[1]
      );
    }
    if (k) {
    }
    console.log(filtering);
    filtering = filtering.filter((skill) =>
      skill.title.toLowerCase().includes(filtera)
    );
    console.log(filtering);
    if (filtering.length === 0) {
      return [];
    }

    return filtering;
  } catch {
    return group_skills_data_giver(-1);
  }
};

export { filter };
