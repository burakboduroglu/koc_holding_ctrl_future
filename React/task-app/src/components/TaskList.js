import TaskItem from "./TaskItem";
import TasksContext from "../context/task";
import {useContext} from "react";



function TaskList(){
    const {tasks} = useContext(TasksContext)
    return (
        <div className="task-list">
            {
                tasks.map((task) => {
                    return (
                        <TaskItem key={task.id} task={task} />
                    )
                })
            }
        </div>
    )
}

export default TaskList;