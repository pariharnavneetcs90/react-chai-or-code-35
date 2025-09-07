//https://www.youtube.com/watch?v=_lJ3KNMue3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=9

import { useState } from "react"

function App() {

  const [colourhai, setColourhai] = useState('green') // default green
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colourhai }}>

        
          <div>
            <button onClick={()=> setColourhai("red")} type="button" class=" text-white bg-red-700 focus:ring-4 rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              Red
            </button>
            <button onClick={()=> setColourhai("blue")} type="button" class=" text-white bg-blue-700 focus:ring-4 rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              blue
            </button>
            <button onClick={()=> setColourhai("yellow")} type="button" class=" text-white bg-yellow-700 focus:ring-4 rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              yellow
            </button>
          </div>
          


      </div>


    </>
  )
}

export default App
