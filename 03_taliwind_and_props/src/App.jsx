import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>testing tailwinds</h1>

<br/>

      <Card propsusekarRehaHai = "navneet parihar" ekOrProp="hi"/>
<br/>
      <Card  propsusekarRehaHai= "ishika" ekOrProp="hello"/>



    </>
  )
}

export default App
