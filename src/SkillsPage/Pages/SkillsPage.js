import React, {useState} from "react";

import SkillsScroller from "../Components/SkillsScroller";
import SkillsViewer from "../Components/SkillsViewer";
import "./SkillsPage.css";


const SkillsPage = () => {

    const [actualSkill,setActualSkill] = useState("")
    const [activeCard,setActiveCard] = useState(false)

    const skills_viewer = document.getElementById('skills_viewer')

    const actualSkillHandler = (skill) => {
        setActualSkill(skill);
        setActiveCard(true)
        // skills_viewer.scrollTop = 0;
    }

    const activeSkillViewerHandler = () =>{
        setActiveCard(false);
    }

    return(
        <section className="skills-page__container">
            <SkillsViewer skill = {actualSkill} isActive = {activeCard} action={activeSkillViewerHandler}/>
            <SkillsScroller action ={actualSkillHandler} />
        </section>
    )
}

export default SkillsPage;