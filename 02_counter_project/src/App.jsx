import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks
  // useState hook se 2 cheese milti hai array ke format me name, setname
  let [counter,setcounter] =useState(5) // counter ki intital value hai 5 
  
  //let counter = 5

  const addVal = () =>{
    //counter = counter +1
    //setcounter(counter) // values update ke liye
    setcounter(counter+1) // ye bhi kar sakte the
    console.log('test', counter)
  }

  const removeVal = () =>{
    setcounter(counter-1)
    console.log('remove value',counter)
  }
  return (
    <>
      <h1>chai or react</h1>
      <h2> counter value {counter}</h2>

      <button onClick={addVal} >
          add value
      </button>
      <br />
      <button onClick={removeVal}
      >remove value</button>

    </>
  )
}

export default App
