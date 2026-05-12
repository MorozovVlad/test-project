import { useState, useEffect, useRef, createContext, useContext } from 'react'
import '../App.css'
import { Context } from '../context/context'

export default function Timer ({time, title}){
    console.log("time" + time)
    const[stateTime, setStateTime] = useState(2)
    const{setSelectedTask} = useContext(Context)


    const timerRef = useRef(time)
    const intervalRef = useRef(null)

    const [primeTime, setPrimeTime] = useState()

    useEffect(()=>{
        setPrimeTime(time)
    }, [time])

    useEffect(()=>{
        if(stateTime == 2) return
        if(stateTime==true){
            intervalRef.current = setInterval(()=>{
                console.log(timerRef)

                let [min, sek] = timerRef.current.split(":").map(Number)
                console.log("Минуты и секунды" + min, sek)



                if(sek==0 && min!=0){
                    min=min-1
                    sek=59
                }else if(sek==0 && min==0){
                    setStateTime(false)
                }else{
                    sek=sek-1
                }

                if(min<10){
                    min="0"+min
                }
                if(sek<10){
                    sek="0"+sek
                }
                let newTime = min + ":" + sek
                console.log(newTime)
                timerRef.current=newTime
                setPrimeTime(timerRef.current)
                setSelectedTask({title:title, time:newTime, isStart:true})
          },1000)
          return () => clearInterval(intervalRef.current)
        }   
      }, [stateTime])
    
      return (
        <div className='bg-cyan-800 rounded-lg p-2'>
          <h1 className='text-3xl text-center' style={stateTime===true ? {color:'oklch(84.1% 0.238 128.85)'} : stateTime===false ? {color:"red"}: {color:'black'}}>{primeTime}</h1>
          <div className='flex justify-center mt-2.5'>
            <button className='bg-green-600 text-white rounded-lg p-0.5 px-5 text-lg mr-4.5 cursor-pointer hover:bg-green-500' onClick={()=>{setStateTime(true), setSelectedTask({title:title, time:time, isStart:true})}}>Start</button>
            <button className='bg-red-800 text-white rounded-lg p-0ю5 px-5 text-lg cursor-pointer hover:bg-red-700' onClick={()=>setStateTime(false)}>Stop</button>
          </div>
          {/* <button onClick={()=>{setTimer(0), setStateTime(2)}}>Reset</button> */}
        </div>
      )
}