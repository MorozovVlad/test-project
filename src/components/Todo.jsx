import { useState, useContext} from 'react'
import TodoItemList from './TodoItemList'
import AddTodo from './AddTodo'
import '../App.css'
import { Context } from '../context/context'
import NoTasks from './noTasks'
import TodoItem from './TodoItem'

export default function Todo(){

    const {
        tasks
    } = useContext(Context)

    const[isOpenTask, setIsOpenTask] = useState(false)

    return(
        <>
            <div className='flex'>
                <div className='mx-auto'>
                    <AddTodo/>
                    {isOpenTask ? <TodoItem setIsOpenTask={setIsOpenTask} time={isOpenTask.time}  title={isOpenTask.title} text={isOpenTask.text} id={isOpenTask.id}/> : <p></p>}
                </div> 
                <div className='tasks'>
                    {tasks && tasks.length > 0 ? tasks.map(task => {
                            return <TodoItemList isOpenTask={isOpenTask} setIsOpenTask={setIsOpenTask} key={task.id} time={task.time}  title={task.title} text={task.text} id={task.id}/>
                        }
                    ) : <NoTasks/>}
                </div>
            </div>
        </>
    )
}