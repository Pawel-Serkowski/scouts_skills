import React, {useState} from 'react';

import {data_giver} from '../../shared/util/data-giver';
import SkillCard from '../Components/SkillCard'
import "./SkillsScroller.css";

const SkillsScroller = (props) =>{

    const [tasks,setTasks] =  useState(data_giver(-1));

    const filterChangeHandler = (event) =>{
        let filter = event.target.value.toLowerCase();
        if(!filter){
            setTasks(data_giver(-1,0));
            return;
        }
        const data = data_giver(-1);
        const filtered_data = data.filter((skill) => skill.nazwa.toLowerCase().includes(filter));
        setTasks(filtered_data);
        return;
    }

    return(
        <section className="skills-scroller__container">
            <header className="skills-scroller__options">

                <div className='filter'><i className="fa-solid fa-filter"></i></div>
                <input placeholder="wpisz początek nazwy" type="text" className="name-filter" id="name-filter" onChange={filterChangeHandler}/>
                <div></div>

            </header>
            <section className="skills-scroller__card-box">
                {
                    tasks.map(skill => 
                        <SkillCard skill={skill} key={skill.id} action={props.action} />
                    )
                }
                    
            </section>
        </section>
    )

}

export default SkillsScroller;