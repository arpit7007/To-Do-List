import React,{useState} from "react";
function Todolist(){
    const [tasks, setTasks]= useState([]);
    const handleaddtask = ()=>{
        if(document.getElementById("input").value.trim() == ""){
            return 
        }
        setTasks([...tasks, document.getElementById("input").value])
        document.getElementById("input").value =""
    }
    const handledeletetask = (index)=>{
        setTasks(tasks.filter((_, i) => i !== index))
    }
    const handleuptask =(index)=>{
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask)
        }
       
    }
    const handledowntask =(index)=>{
        if(index<tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTasks(updatedTask)
        }
       
    }



    return (
        <div className="todo-container">
            <h1 className="todo-title">🚀 To-Do-List</h1>

            <div className="input-section">
            <input
                type="text"
                placeholder="Enter a task..."
                id="input"
                className="todo-input"
            />
            <button onClick={handleaddtask} className="add-btn">
                Add
            </button>
            </div>

            <ol className="task-list">
            {tasks.map((task, index) => {
                return (
                <li key={index} className="task-item">
                    <span className="task-text">{task}</span>

                    <div className="btn-group">
                    <button onClick={() => handledeletetask(index)} className="delete-btn">
                        ❌
                    </button>
                    <button onClick={() => handleuptask(index)} className="move-btn">
                        ⬆
                    </button>
                    <button onClick={() => handledowntask(index)} className="move-btn">
                        ⬇
                    </button>
                    </div>
                </li>
                );
            })}
            </ol>
        </div>
        );

    
}
export default Todolist