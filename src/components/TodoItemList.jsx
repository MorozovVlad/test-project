import '../App.css'
import { Context } from '../context/context'
import { useContext } from 'react'

export default function TodoItemList({title, text, id, time, setIsOpenTask, isOpenTask}){
    const{removeTask, setSelectedTask} = useContext(Context)
    


    return (
        <div className="mx-auto mr-10 mb-5 w-xl h-36 bg-cyan-900 flex flex-col p-6 rounded-2xl" onClick={()=> setIsOpenTask({id, title, text, time})}>
            <h2 className='text-4xl text-white'>{title}</h2>   
            <p>{time}</p>   
            <button className='bg-orange-800 text-2xl mt-auto rounded-lg p-1 text-white cursor-pointer hover:bg-orange-700' onClick={(e)=>{console.log(isOpenTask.id + "---" + id), removeTask(id), setSelectedTask({title:"",time:"", isStart:false}), e.stopPropagation(); if(isOpenTask.id == id){setIsOpenTask(false), console.log("удаление")}}}>delete</button>
        </div>
    )
}