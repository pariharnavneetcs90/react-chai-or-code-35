//5th
//deta le raha hai
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext) //user a raha hai  (import UserContext from '../context/UserContext') se
    
    if (!user) return <div>please login</div>

    return <div>wlecome {user.username}</div>
}

export default Profile