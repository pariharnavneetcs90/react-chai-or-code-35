//3rd

import { useState } from 'react'
import './App.css'
import { Todoprovider } from './context/TodoContext'

function App() {
  const addTodo = (todo) =>{
    setTodos((prev) => [todo,...prev]) //todo matlab jo abhi mila text usko purane todo kie text se milana ,(...prev) sari purain todos ki vaue li or add kar di 
  }

  //todos context aye ga usko kahi store karna hai or  ui bhi change ho ga to useState use kare ga 
  const [todos,setTodos] = useState([])

  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>  {/*these are methords */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
