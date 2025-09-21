// 1 step
import { createContext, useContext } from "react";


// create context
export const ThemeContext = createContext({  // default likh reha hai

    themeMode : "light" , // varibale
    darkTheme :() => {},
    lightTheme :() => {},

 })
// context provider
 export const ThemeProvider =  ThemeContext.Provider


 //custom hooks
 //context use
export default function useTheme (){
    return useContext(ThemeContext)
}


