import '../App.css'
import Timer from './Timer'

export default function TodoItem({title, text, id, time, removeTask}){
    return (
        <div className="todo-item">
            <h2>{title}</h2>
            <p>{text}</p>
            <Timer time={time}/>
            <button onClick={()=>removeTask(id)}>delete</button>
        </div>
    )
}