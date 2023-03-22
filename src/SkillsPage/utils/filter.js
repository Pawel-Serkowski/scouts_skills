import { data_giver } from "../../shared/util/data-giver";

import SkillCard from "../Components/SkillCard";

const filter = (func) => {
  try {
    const w = document.getElementById("title-filter").value;
    const m = document.getElementById("methods").value;
    const t = document.getElementById("level").value;
    const k = document.getElementById("category").value;

    const filtera = w.toLowerCase();

    if (filtera === "" && m === "" && t === "" && k === "") {
      return data_giver(-1).map((skill) => (
        <SkillCard skill={skill} key={skill.id} action={func} />
      ));
    }

    const data = data_giver(-1);

    let filtering = data;
    let option = [];
    if (m) {
      if (m === "H") {
        option = ["*", "**"];
      }
      if (m === "HS") {
        option = ["**", "***"];
      }
      if (m === "W") {
        option = ["***", "****"];
      }
      filtering = filtering.filter(
        (skill) => skill.trudnosc === option[0] || skill.trudnosc === option[1]
      );
    }
    if (k) {
      filtering = filtering.filter((skill) => skill.typ === k);
    }
    if (t) {
      filtering = filtering.filter(
        (skill) => skill.trudnosc.toLowerCase() === t.toLowerCase()
      );
    }
    filtering = filtering.filter((skill) =>
      skill.nazwa.toLowerCase().includes(filtera)
    );

    return filtering.map((skill) => (
      <SkillCard skill={skill} key={skill.id} action={func} />
    ));
  } catch {
    return data_giver(-1).map((skill) => (
      <SkillCard skill={skill} key={skill.id} action={func} />
    ));
  }
};

export { filter };
