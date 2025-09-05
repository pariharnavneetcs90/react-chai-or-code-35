import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";

import App from './App.jsx'

//---------------------------------------------------mycode 
function Myapp(){
  return(
    <div>
      <h1>abcd</h1>
    </div>
  )
}
//object hai 
const AnotherElel= (
  <a href='https://google.com'>visit google</a>
)
//khud ka element
const reactElelment = React.createElement(
  'a', // 1st tag
  {href:'https://google.com',target:'_blank'}, // 2nd attributes
  'click me to visit google' //3rd direct text
)

createRoot(document.getElementById('root')).render(
  
  
   <App />
    
  //Myapp()
  //AnotherElel // object ki calling
  //reactElelment
  
   
)
