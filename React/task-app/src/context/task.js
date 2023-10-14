import {createContext, useState} from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({children}){
    const [tasks, setTasks] = useState([])


    const fetchTask = async () => {
        const response = await axios.get('http://localhost:3004/task')
        setTasks(response.data)
    }

    const createTask = async (title, desc) => {
        const response = await axios.post('http://localhost:3004/task',{
            title,
            desc
        });
        const createdTasks = [
            ...tasks,
            response.data
        ];
        setTasks(createdTasks);
    }

    const deleteTaskById = async (id) => {
        const response = await axios.delete(`http://localhost:3004/task/${id}`);
        const afterDeletingTasks = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDeletingTasks);
    }

    const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
        const response = await axios.put(`http://localhost:3004/task/${id}`, {
            title: updatedTitle,
            desc: updatedTaskDesc
        });
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return {
                    id,
                    title: updatedTitle,
                    desc: updatedTaskDesc
                }
            }
            return task;
        });

        setTasks(updatedTasks);
    }

    const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTask,
        deleteTaskById,
        editTaskById
    }

    return(
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContext;