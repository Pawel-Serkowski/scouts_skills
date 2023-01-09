import React, {useState} from "react";

import SkillsScroller from "../Components/SkillsScroller";
import SkillsViewer from "../Components/SkillsViewer";
import "./SkillsPage.css";


const SkillsPage = () => {

    const [actualSkill,setActualSkill] = useState({})

    const actualSkillHandler = (skill) => {
        setActualSkill(skill);
        console.log(skill);
    }

    return(
        <section className="skills-page__container">
            <SkillsViewer actual = {actualSkill}/>
            <SkillsScroller action ={actualSkillHandler} />
        </section>
    )
}

export default SkillsPage;