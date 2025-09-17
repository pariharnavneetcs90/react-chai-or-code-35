//4th
//isme data bej reha hai
import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    //usestate
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //useContext (contextApi)
    const {setUser} =useContext(UserContext) // setUser a raha hai  (import UserContext from '../context/UserContext') se

    const handleSubmitHai = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
    <div>
        <h2>login</h2>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='username enter karo be' /> {/* value aye gi to value={username} , value chage ho gi to  onChange={(e) => setUsername(e.target.value)}*/}
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='password enter karo be' />
        <button onClick={handleSubmitHai}>Submit</button>
    </div>
    </>
  )
}

export default Login