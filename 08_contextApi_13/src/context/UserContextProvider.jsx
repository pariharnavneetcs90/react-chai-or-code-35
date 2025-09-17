//2nd step

import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider =({children}) => { // children global prop samaj lo (kuch bhi naam le lo)
    const [user,setUser] = useState() // yaha pe api wagera call ho gi
  return (
    <UserContext.Provider value={{user,setUser}}> {/*.Provider lagana pade ga  */} {/* jo bhi useState me data aye ga isme bhej de ga */}
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider