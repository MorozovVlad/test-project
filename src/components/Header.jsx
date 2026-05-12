import '../App.css'

export default function Header({selectedTask}){
    const {title, time, isStart} = selectedTask
    return(
        <>
            {isStart ? <header className='text-white' style={{fontFamily:"Helvetica"}}>Сейчас выполняется: {title} оставшееся время {time}</header> :  <header className='text-white' style={{fontFamily:"Helvetica"}}>Задачи не выбраны</header>}
        </>
    )
}