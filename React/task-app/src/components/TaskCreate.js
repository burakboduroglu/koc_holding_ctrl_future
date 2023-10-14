import {useState} from "react";
import TasksContext from "../context/task";
import {useContext} from "react";

function TaskCreate({ task, taskFormUpdate }){

    const {editTaskById, createTask} = useContext(TasksContext);

    const [title, setTitle] = useState(task ? task.title : '');
    const [desc, setDesc] = useState(task ? task.desc : '')

    // Task Title
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    // Task Description
    const handleTaskChange = (event) => {
        setDesc(event.target.value)
    }

    // Task Create Button
    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            editTaskById(task.id, title, desc)
        } else {
            createTask(title, desc);
        }
        setTitle('');
        setDesc('');
    }

    return (
        <div>
            {
                !taskFormUpdate ?
                    (
                        <div>
                            <div className="task-create">
                                <h3 className="task-header">- Please enter a TASK -</h3>
                                <form className="task-form">
                                    <label className="task-label">Title</label>
                                    <input className="task-input" value={title} onChange={handleTitleChange} type="text"/>

                                    <label className="task-label" >Enter a Task</label>
                                    <textarea className="task-input" value={desc} onChange={handleTaskChange} />

                                    <button className="task-button" onClick={handleSubmit}>Create</button>
                                </form>
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            <h3 className="task-update">- Please edit the TASK -</h3>
                            <form className="task-form">
                                <label className="task-label">Edit Title</label>
                                <input className="task-input" value={title} onChange={handleTitleChange} type="text" placeholder={task.title}/>

                                <label className="task-label" >Edit a Task</label>
                                <textarea className="task-input" value={desc} onChange={handleTaskChange} placeholder={task.desc} />

                                <button className="task-button update-button" onClick={handleSubmit}>Update</button>
                            </form>
                        </div>
                    )
            }
        </div>

    )
}

export default TaskCreate;