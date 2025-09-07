//https://www.youtube.com/watch?v=Lt4vy8hfc-s&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=10
import { useEffect } from 'react'
import { useState, useCallback } from 'react'


function App() {
  //---------------------------------------------------------------usestate
  // length section
  const [length, setLength] = useState(8)// default 8
  //number section
  const [numberAllowed, setNumberAllowed] = useState(false) // false kyo ki ya to number ho ga ya nahi ho ga
  //character section
  const [charterAllowed, setCharterAllowed] = useState(false) // false kyo ki ya to character ho ga ya nahi ho ga
  //password input feild
  const [password, setPassowrd] = useState("")//default kuch nahi hai 
  //----------------------------------------------------------usecallback---------------------------------------------------------
  //password generator methord

  //usecalbback me 2 cezzse hoti hai 1-funtion or 2-dependency(jo ki array me pass hoti hai)

  // function ()=>{}
  // dependency- length,numberAllowed,charterAllowed,setPassowrd
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let strings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      strings += '0123456789'
    }
    if (charterAllowed) {
      strings += '!@#$%^&*()_+'
    }
    //------------------------------------------------------------                
    for (let i = 1; i <= length; i++) {
      let passchar = Math.floor(Math.random() * strings.length + 1) // +1 taki 0 vaue na aye  // Math.floor - ek no deta hai eg- 4.9 = 4 
      // character aya hai matlab (array ki index value ayi hai character thodi aya hai )
      pass += strings.charAt(passchar)
    }
    //read
    setPassowrd(pass)
    

  }, [length, numberAllowed, charterAllowed, setPassowrd])
  //------------------------------------------------------useEffect------------------------------------------------

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charterAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'> test</div>

      <div className='flex shadow rounded-lg overflow-hidden m-15'>
        {/* INPUT FEILD */}
        <input type='text' value={password}/*{password} jo humne useStaeme banya hai upar */

          className='outline-none w-full py-1 px-3 ' placeholder='passowrd' readOnly
        />

        <button className=' bg-blue-700 p-5'>copy</button>
      </div>

      <div>
        <div>
          {/* RANGE FEILD */}
          <input type='range' min={6} max={100} value={length} /* length jo use state me likha tha upar */ className='cursor-pointer'

            //event
            onChange={(eventHai) => { setLength(eventHai.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        {/*number */}
        <div>
          <input type="checkbox" defaultChecked={numberAllowed}  /*numberAllowed jo useState me likha tha upar */
            //turue false
            onChange={() => {
              setNumberAllowed((previous) => !previous)
            }}
          />
          <label>Number</label>

        </div>
        {/*character */}
        <div>
          <input type="checkbox" defaultChecked={charterAllowed}
            //turue false
            onChange={() => {
              setCharterAllowed((previous) => !previous)
            }}
          />
          <label>character</label>

        </div>

      </div>
    </>
  )
}

export default App
