//https://www.youtube.com/watch?v=JQVBGtZMqgU&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=13
//2nd
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import { useEffect } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  //usestate
  const [themeMode,setThemeMode] = useState('Light')

  const lightTheme = () =>{ 
    setThemeMode("Light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  //actual change in theme
  useEffect(() => {

    // phele agar koi mode hai to hataye ga
   document.querySelector('html').classList.remove("light","dark")

    // ab theme add kare ga
   document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])
  

  return (
    //https://github.com/hiteshchoudhary/chai-aur-react/blob/main/contextNotes.md

    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>  {/*ye (import { ThemeProvider } from './context/Theme' ) se aya   */}
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
    

  )
}

export default App
