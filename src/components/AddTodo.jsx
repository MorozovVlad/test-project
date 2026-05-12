import { useState, useContext} from 'react'
// import '../App.css'
import { Context } from '../context/context'

export default function AddTodo(){

    const{addTask} = useContext(Context)

    const[title, setTitle] = useState("")
    const[text, setText] = useState("")
    const[time, setTime] = useState("00:00")

    const isNull = title != "" && text!=""

    return(
        <div className=' mx-auto w-xl h-96 bg-cyan-900 flex flex-col p-6 rounded-2xl'>
            <input className='bg-cyan-800 text-2xl rounded-lg p-1 text-white'  type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea className='bg-cyan-800 text-2xl mt-2 rounded-lg p-1 text-white h-72' type="textarea" placeholder='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <input className='bg-cyan-800 text-2xl mt-2 rounded-lg p-1 text-white' type="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <button className='bg-cyan-700 text-2xl mt-2 rounded-lg p-1 text-white cursor-pointer hover:bg-cyan-600' onClick={()=>{if(isNull){
                addTask(title, text, time)
            } else{
                alert("Пустые значения")
            }
            setTitle(""), setText("")}}>Add task</button>
        </div>
    )
}