import {useState} from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";
import {useContext} from "react";

function TaskItem({ task }){

    const {editTaskById, deleteTaskById} = useContext(TasksContext);
    const [taskEdit, setTaskEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteTaskById(task.id)
    }

    const handleEditClick = () => {
        setTaskEdit(true);
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setTaskEdit(false);
        editTaskById(id, updatedTitle, updatedTaskDesc)
    }

    return (
        <div className="show-task">
            {
                taskEdit ? (<TaskCreate task={task} taskFormUpdate={true}/>)
                    :
                    (
                        <div>
                            <h3 className="task-item-header">TASK TITLE</h3>
                            <p className="task-text">{task.title}</p>
                            <h3 className="task-item-header">TASKS</h3>
                            <p className="task-text">{task.desc}</p>
                            <div>
                                <button className="delete" onClick={handleDeleteClick}>Delete</button>
                                <button className="edit" onClick={handleEditClick}>Edit</button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default TaskItem




