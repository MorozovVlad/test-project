import { useState} from 'react'
import '../App.css'

export default function AddTodo({addTask}){

    const[title, setTitle] = useState("")
    const[text, setText] = useState("")
    const[time, setTime] = useState("00:00")

    const isNull = title != "" && text!=""

    return(
        <div className='add-todo'>
            <p>Add task</p>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea type="textarea" placeholder='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <input type="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <button onClick={()=>{if(isNull){
                addTask(title, text, time)
            } else{
                alert("Пустые значения")
            }
            setTitle(""), setText("")}}>Add task</button>
        </div>
    )
}