import React from "react";
import { useState } from "react";
import "./todo.css"
function Todo(){
    const[task,settask] = useState("")
    const[tasks,settasks] = useState([])
    const[del,setdel] = useState()

    function tasker(){
        settasks([...tasks,task])
        settask("")

    }
    function deletes(id){
        settasks(tasks.filter((value,idr)=>idr !== id))
    }

    function updat(id){
       settask(tasks[id])
       setdel(id)

       
    }
    return(
        <div className="todo-container">
            <div>
                <input type="text" placeholder="enter the task" value={task} onChange={(e)=>settask(e.target.value)}/>
                <input type="text" placeholder="enter the tesk" value={task} />
            </div>
            <div>
                <button type="submit" onClick={()=>tasker()}>Add</button>
            </div>
            {
                tasks.map((tsk,ids)=>(
                    <ul key={ids}>
                        <li>{tsk}</li>
                        <button type="button" onClick={()=>deletes(ids)}>del</button>
                        <button type="button"onClick={()=>updat(ids)}>UD</button>
                    </ul>
                ))
            }

            
            
        </div>
    )
}

export default Todo;
