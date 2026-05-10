import '../App.css'
import Timer from './Timer'
import { Context } from '../context/context'
import { useContext } from 'react'

export default function TodoItem({title, text, id, time}){
    const{removeTask} = useContext(Context)
    return (
        <div className="todo-item">
            <h2>{title}</h2>
            <p>{text}</p>
            <Timer time={time}/>
            <button onClick={()=>removeTask(id)}>delete</button>
        </div>
    )
}