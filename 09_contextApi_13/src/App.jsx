// 3rd 
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider> {/*ye global hai isi ke andar sare components aye ga  */}
     <h1>hello</h1>

     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
