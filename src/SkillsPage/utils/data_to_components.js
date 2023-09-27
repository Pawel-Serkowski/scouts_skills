import ScoutLittleSkillCard from "../Components/ScoutLittleSkillCard";
import ScoutSkillCard from "../Components/ScoutSkillCard";

export const skills_data_to_components = (skills_data) => {
  const tasks = skills_data.map((skill) => {
    if (skill._id[0] === "z") {
      return <ScoutLittleSkillCard skill={skill} key={skill._id} />;
    }
    return <ScoutSkillCard skill={skill} key={skill._id} />;
  });
  return tasks;
};
