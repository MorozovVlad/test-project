import { useState, useContext} from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import '../App.css'
import { Context } from '../context/context'

export default function Todo(){

    const {
        tasks
    } = useContext(Context)

    return(
        <>
            <div className='todo-class'>
                <div className='tasks'>
                    {tasks.map(task => {
                            return <TodoItem key={task.id} time={task.time}  title={task.title} text={task.text} id={task.id}/>
                        }
                    )}
                </div>
                <AddTodo/>
            </div>
        </>
    )
}