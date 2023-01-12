import React from 'react';

import "./SkillsViewer.css";

const SkillsViewer = (props) =>{

    const nazwa = props.skill ? props.skill.nazwa.split('/') : ["",""];



    const task_creator = (task) => {
        let t_list = task.split("$");
        const tasks_list = []
        t_list[0] += ":$"
        tasks_list.push(t_list[0]);
        if(t_list.length > 1){
            const temp_list = t_list[1].split("-");
            for(let i = 0; i < temp_list.length; i++){
                if(temp_list[i] !== ' ')
                    tasks_list.push(temp_list[i]);
            }
        }
        return tasks_list;
    }


    return(
            <section className={`skills-viewer__container ${props.isActive ? "active" : ""}`}>
                {props.skill ? <React.Fragment> <header className="skills-viewer__header">
                    <div className="skills-viewer__cross" onClick={props.action}>
                    <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className='skills-viewer__title'>
                            <h2>{nazwa[0]}</h2>
                            {nazwa[1] ? <h2>{nazwa[1]}</h2> : <p></p>}
                    </div>
                    <div className='skills-viewer__level'>
                        <h2>{props.skill.trudnosc}</h2>
                    </div>
                </header>
                <div className="skills-viewer__content" id="skills-viewer">
                    <section className="skills-viewer__tasks">
                        <h1>Zadania:</h1>
                        {props.skill.zadania.map(task =>
                        <div className='skills-viewer__task'>
                            {task_creator(task).map(tasky => 
                                <p className={!tasky.includes("$") ? "under" : "main"}><i class="fa-regular fa-feather-pointed"></i>{tasky.split("$")[0]}</p>
                            )}
                        </div>
                        )}
                    </section>
                    <section className="skills-viewer__description">
                        <div className="img-box">
                                <img src={require(`../../shared${props.skill.img}`)} alt=""/>
                        </div>
                        <p className="skills-viewer__idea">{props.skill.idea}</p>
                        {props.isActive ?                     
                        <section className="skills-viewer__tasks">
                            <h1>Zadania:</h1>
                            {props.skill.zadania.map(task =>
                            <div className='skills-viewer__task'>
                                {task_creator(task).map(tasky => 
                                    <p className={!tasky.includes("$") ? "under" : "main"}><i class="fa-regular fa-feather-pointed"></i>{tasky.split("$")[0]}</p>
                                )}
                            </div>
                            )}
                        </section> : null}
                    </section>
                </div>

                        
                </React.Fragment>:   <h1 className="skills-viewer__nothing">nothing is selected</h1> }
                </section>
            
        

    )


}

export default SkillsViewer;
