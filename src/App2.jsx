import { useState, useEffect, useRef, createContext, useContext } from 'react'
import './App.css'

const ThemeContext = createContext();

function App() {

  const [count, setCount] = useState(0)

  const reef = useRef()
  console.log(reef.current?.value)

  const [time, setTime] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval) 
  }, [])


  return (
    <ThemeContext.Provider value={{theme:"dark", propp:count}}>
      <Header />
      <h1>Time: {time}</h1>
      <h1>{count}</h1>
      <section id="center">
        <button
          ref={reef}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button 
          type="button"
          className="counter" 
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <input ref={reef} type='text'/>
      </section>

    </ThemeContext.Provider>
  )
}

function Header() {
  return <User />;
}

function User() {
  const {theme, propp} = useContext(ThemeContext);
  return <div>Тема: {propp}</div>;
}

export default App


