import { data_giver } from "../../shared/util/data-giver";

const filter = (func) => {
  try {
    const w = document.getElementById("title-filter").value;
    const m = document.getElementById("methods").value;
    const t = document.getElementById("level").value;
    const k = document.getElementById("category").value;

    const filtera = w.toLowerCase();

    if (filtera === "" && m === "" && t === "" && k === "") {
      return data_giver(-1);
    }

    const data = data_giver(-1);

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
        (skill) => skill.level === option[0] || skill.level === option[1]
      );
    }
    if (k) {
      filtering = filtering.filter((skill) => skill.type === k);
    }
    if (t) {
      filtering = filtering.filter(
        (skill) => skill.level.toLowerCase() === t.toLowerCase()
      );
    }
    filtering = filtering.filter((skill) =>
      skill.title.toLowerCase().includes(filtera)
    );
    if (filtering.length === 0) {
      return [];
    }

    return filtering;
  } catch {
    return data_giver(-1);
  }
};

export { filter };
