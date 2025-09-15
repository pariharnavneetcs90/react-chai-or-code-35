import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data,setData] = useState([])
    // api callling ki liye use effectuse kar reha hai
    useEffect(() => {
      
        //fech for api call
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json()) // response string me mile ga to json me conver kar reha hai
        .then(data => {
            console.log(data);
            setData(data)  // ab data mil jaye ga 
        }) // normal varibale(const) me nahi store ho ga isse hum useState me kare ga store
    }, [])
    
  return (
    <>
    <div>Github follers -----{data.followers} </div> {/* data jo json se aya .follwers key hai jo api me hai*/} 
    <img src={data.avatar_url}/>
    </>
    
  )
}

export default Github