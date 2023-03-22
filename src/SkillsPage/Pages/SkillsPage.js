import React, {useState} from "react";

import SkillsScroller from "../Components/SkillsScroller";
import SkillsViewer from "../Components/SkillsViewer";
import "./SkillsPage.css";


const SkillsPage = () => {

    const [actualSkill,setActualSkill] = useState("")
    const [isActiveCard,setIsActiveCard] = useState(false)
    const actualSkillHandler = (skill) => {
        setActualSkill(skill);
        setIsActiveCard(true)
    }

    const activeSkillViewerHandler = () =>{
        setIsActiveCard(false);
    }

    return(
        <section className="skills-page__container">
            <SkillsViewer skill = {actualSkill} isActive = {isActiveCard} action={activeSkillViewerHandler}/>
            <SkillsScroller action ={actualSkillHandler} />
        </section>
    )
}

export default SkillsPage;