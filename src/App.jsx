import { useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import Todo from './components/Todo'
import { Context } from './context/context'

function App() {

  const[tasks, setTasks] = useState([])
  const[selectedTask, setSelectedTask] = useState("")

  function addTask(title, text, time){
      const id = new Date()
      const newTask = {id, title, text, time}
      setTasks((prev)=>[...prev, newTask])
  }

  function removeTask(idRemove){
    setTasks((prev)=>prev.filter((task, id)=> task.id!=idRemove))
  }

  function selectTask(title){
    console.log("задача записана в выполнение" + title)
    setSelectedTask(title)
  }   

  return (
    <Context.Provider value={{
      addTask,
      removeTask,
      tasks,
      selectTask,
      selectedTask
    }}>
      <Header selectedTask={selectedTask}/>
      <Todo />
    </Context.Provider> 
  )
}



export default App


