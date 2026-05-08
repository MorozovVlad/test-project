import { useState} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import '../App.css'

export default function Todo(){

    const[tasks, setTasks] = useState([])
    function addTask(title, text, time){
        const id = new Date()
        const newTask = {id, title, text, time}
        setTasks((prev)=>[...prev, newTask])
    }

    function removeTask(idRemove){
        setTasks((prev)=>prev.filter((task, id)=> task.id!=idRemove))
    }
    
    return(
        <>
            
            <div className='todo-class'>
                <div className='tasks'>
                    {tasks.map(task => {
                            return <TodoItem key={task.id} time={task.time}  title={task.title} text={task.text} removeTask={removeTask} id={task.id}/>
                        }
                    )}
                </div>
                <AddTodo  addTask={addTask}/>
            </div>
        </>
    )
}