import React, {useState} from 'react';

import {data_giver} from '../../shared/util/data-giver';
import FilterCard from './FilterCard';
import SkillCard from '../Components/SkillCard'
import "./SkillsScroller.css";

const SkillsScroller = (props) =>{


    const [isActive,setIsActive] = useState(false);
    const [tasks,setTasks] =  useState(data_giver(-1));




    const filterChangeHandler = () =>{

        const w = document.getElementById('name-filter').value;
        const m = document.getElementById('metodyka').value;
        const t = document.getElementById('trudnosc').value;
        const k = document.getElementById('kategoria').value;

        const filtera = w.toLowerCase();

        if( filtera ==="" && m === "" && t === "" && k === ""){
            setTasks(data_giver(-1));
            return;
        }

        const data = data_giver(-1);

        let filtering = data;
        let option = [];
        if(m){
            
            if(m === "H"){;
                option = ["*","**"]
            }
            if(m === "HS"){
                option = ["**","***"];
            }
            if(m === "W"){
                option = ["***","****"];
            }
            filtering = filtering.filter((skill) => skill.trudnosc === option[0] || skill.trudnosc ===option[1]);
        }
        if(k){
            filtering = filtering.filter((skill) => skill.typ === k);
        }
        if(t){
            filtering = filtering.filter((skill) => skill.trudnosc.toLowerCase() === t.toLowerCase());
        }
        filtering = filtering.filter((skill) => skill.nazwa.toLowerCase().includes(filtera))
        setTasks(filtering);
    }

    const filterHandler = () => {
        setIsActive(!isActive);
    }

    return(
        <section className="skills-scroller__container">

            
            <FilterCard action={filterHandler} isActive={isActive ? "active" : ""} fuc={filterChangeHandler}/>
            <header className="skills-scroller__options">

                <div className='filter' onClick={filterHandler}><i className="fa-solid fa-filter"></i></div>
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