import { useState, useEffect, useRef, createContext, useContext } from 'react'
import '../App.css'

export default function Timer ({time}){
      const[timer, setTimer] = useState(time)
      const[stateTime, setStateTime] = useState(2)
      useEffect( ()=>{

        

        if(stateTime == 2) return
        if(stateTime==true){
          const interval = setInterval(()=>{

            let [min, sek] = time.split(":").map(Number)
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
            time = min + ":" + sek

            console.log("время после - 1 " + time)

            setTimer(
                time
            )
          },1000)
          return () => clearInterval(interval)
        }   
      }, [stateTime])
    
      return (
        <div className='timer'>
          <h1 style={stateTime===true ? {color:'green'} : stateTime===false ? {color:"red"}: {color:'black'}}>{timer}</h1>
          <button onClick={()=>setStateTime(true)}>Start</button>
          <button onClick={()=>setStateTime(false)}>Stop</button>
          <button onClick={()=>{setTimer(0), setStateTime(2)}}>Reset</button>
        </div>
      )
}