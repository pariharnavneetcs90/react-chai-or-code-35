//1st step 
import { createContext, useContext } from "react";

//create context
export const TodoContext = createContext ({
    //todos : [{},{},{}] default ke liye 
    todos : [
        {
            id: 1,
            todo:"Todo msg",
            completed : "false" ,
        }
    ],
    //functality define here
    addTodo : (todo) => {}, // app.js me funcnality likh de ga 
    updatedTodo : (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete : (id) => {}
})

//use context
//usetodo method hai 
export const useTodo = () =>{
    return useContext(TodoContext)//usecontext con sa context de rahah hai (Todocontext)
}

//todo provider

export const Todoprovider = TodoContext.Provider