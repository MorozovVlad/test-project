import '../App.css'

export default function Header({selectedTask}){
    return(
        <>
            {selectedTask ? <header className='text-white' style={{fontFamily:"Helvetica"}}>Сейчас выполняется: {selectedTask}</header> :  <header className='text-white' style={{fontFamily:"Helvetica"}}>Задачи не выбраны</header>}
        </>
    )
}