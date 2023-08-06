import { group_skills_data_giver } from "../../shared/util/data-giver";

import ScoutSkillCard from "../Components/ScoutSkillCard";
import GroupScoutLittleSkillCard from "../Components/GroupScoutLittleSkillCard";

const filter = (func) => {
  try {
    const w = document.getElementById("title-filter").value;
    const m = document.getElementById("methods").value;
    const k = document.getElementById("category").value;

    const filtera = w.toLowerCase();

    if (filtera === "" && m === "" && k === "") {
      return group_skills_data_giver(-1).map((skill) => {
        if (skill._id[0] === "z") {
          return (
            <GroupScoutLittleSkillCard
              skill={skill}
              key={skill._id}
              action={func}
            />
          );
        }
        return <ScoutSkillCard skill={skill} key={skill._id} action={func} />;
      });
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
      filtering = filtering.filter((skill) => skill.typ === k);
    }
    filtering = filtering.filter((skill) =>
      skill.nazwa.toLowerCase().includes(filtera)
    );
    if (filtering.length === 0) {
      return (
        <h1 className="nothing-found">
          Nie możemy znaleść odpowiednich tropów
        </h1>
      );
    }

    return filtering.map((skill) => {
      if (skill._id[0] === "z") {
        return (
          <GroupScoutLittleSkillCard
            skill={skill}
            key={skill._id}
            action={func}
          />
        );
      }
      return <ScoutSkillCard skill={skill} key={skill._id} action={func} />;
    });
  } catch {
    return group_skills_data_giver(-1).map((skill) => {
      if (skill._id[0] === "z") {
        return (
          <GroupScoutLittleSkillCard
            skill={skill}
            key={skill._id}
            action={func}
          />
        );
      }
      return <ScoutSkillCard skill={skill} key={skill._id} action={func} />;
    });
  }
};

export { filter };
