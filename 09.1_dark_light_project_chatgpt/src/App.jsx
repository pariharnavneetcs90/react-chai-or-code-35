import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

/*Think of this like a “box” to hold data (in our case: theme + toggle function).
Any component can open this box if it knows about ThemeContext.
*/

// 2. App Component (Provider)
function App() {
  const [theme, setTheme] = useState("light"); /*Here we create a state called theme (light/dark). ,setTheme changes between light and dark. */

  // function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light")); //condition ? expressionIfTrue : expressionIfFalse;  // This function switches theme whenever the button is clicked

    // line 137 last line me acche se smjhaya hai
                                                                
  };

  return (
    /*We wrap everything in ThemeContext.Provider →
    This means all children inside can use the values we pass (theme, toggleTheme) ,( useState,function) without props.

    The background + text color of the page also changes based on the theme. */
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          
          backgroundColor: theme === "light" ? "#ffffff" : "#222222", // theme light hai to fff anhi to 222
          color: theme === "light" ? "#000000" : "#ffffff", // color matlab text  theme light to black nahi to white
          
        }}
      >
        <Parent />
      </div>
    </ThemeContext.Provider>
  );
}

// 3. Nested components
function Parent() {
  return <Child />;
}

function Child() {
  return <Profile />;
}
/* Just to show that data can go deep down (from App → Parent → Child → Profile) without passing props. */

// 4. Consume Context
function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext); /* Here we open the box with useContext.
Now Profile knows what theme is, and it also has the toggle function. */

  return (
    <>
     {/* Displays current theme + button to change it. */}
      <h1>Current Theme: {theme} 🌗</h1>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#333" : "#ddd",
          color: theme === "light" ? "#fff" : "#000"
        }}
      >
        Toggle Theme
      </button>
    </>
  );
}

export default App;

/*
 Final Output

Page starts with light theme (white background).

Button says Toggle Theme.

If clicked → switches to dark theme (black background).

Click again → back to light theme.
 */

/*
⚡ In one line:
This code uses Context API so any component can access theme and toggleTheme without passing props. It lets you switch between light and dark mode easily.
*/

/*
(App.js)
   |
   |-- ThemeContext.Provider (shares "theme" + "toggleTheme")
         |
         v
       Parent
         |
         v
       Child
         |
         v
      Profile  ---> useContext(ThemeContext) 
                   (gets "theme" + "toggleTheme")

*/

/*
Visual with explanation:

App → creates theme (light/dark) and a toggleTheme function.

ThemeContext.Provider → shares them like a global box.

Parent → Child → don’t need to pass anything.

Profile → directly opens the box with useContext(ThemeContext) and uses the values.
*/

/*
🔄 What happens when button is clicked?

toggleTheme runs → switches light ↔ dark.

Because theme is from state, React re-renders everything inside Provider.

All components using that context (like Profile, background div, etc.) update instantly.
*/

/*
So instead of passing props like this:
App → Parent → Child → Profile
You just put data in a box (Context), and Profile picks it up directly.
*/

/**
 1. setTheme

This is the state updater function that React gives us when we use useState.

It changes the value of theme.
-------------------------------------------------------------------------------
2. (prev) => ...

Instead of writing setTheme("dark") or setTheme("light"),
we’re passing a function to setTheme.

prev is the previous value of theme.

If theme was "light", then prev = "light".

If theme was "dark", then prev = "dark".
--------------------------------------------------------------------------------
3. (prev === "light" ? "dark" : "light")

This is a ternary operator (short if-else).

It means:

If prev === "light" → return "dark"

Else → return "light"
---------------------------------------------------------------------------------------
4. Together

So, the whole line means:

👉 “Check what the current theme is.

If it’s light, change it to dark.

If it’s dark, change it to light.”
------------------------------------------------------------------------------------------
Example in action:

Theme is "light" → button clicked → setTheme("dark").

Theme is "dark" → button clicked → setTheme("light").
---------------------------------------------------------------------------------------
⚡ In simple words:
That one line is just a toggle switch between "light" and "dark".
 */