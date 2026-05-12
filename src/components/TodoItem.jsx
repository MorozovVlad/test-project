import '../App.css'
import Timer from './Timer'
import { Context } from '../context/context'
import { useContext } from 'react'

export default function TodoItem({title, text, id, time, setIsOpenTask}){
    console.log(time)
    const{removeTask, setSelectedTask} = useContext(Context)
    return (
        <div className="mx-auto mt-5 w-xl h-96 bg-cyan-900 flex flex-col p-6 rounded-2xl">
            <h2 className='text-4xl text-white'>{title}</h2>
            <p className='h-2/5 mt-4.5 text-xl text-white'>{text}</p>
            <Timer title={title} time={time}/>
            
            <button className='bg-orange-800 text-2xl mt-auto rounded-lg p-1 text-white cursor-pointer hover:bg-orange-700' onClick={()=>{setIsOpenTask(false), removeTask(id), setSelectedTask({title:"",time:"", isStart:false})}}>delete</button>
        </div>
    )
}