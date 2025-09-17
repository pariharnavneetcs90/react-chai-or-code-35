import React, { createContext, useContext } from "react";

// 1. Create Context
const ekContext = createContext();


// 2. App Component (Provider)
function App() {
  const user = "Navneet"; // data we want to share

  return (
    <ekContext.Provider value={user}>
      <Parent />
    </ekContext.Provider>
  );
}

// 3. Some nested components
function Parent() {
  return <Child />;
}

function Child() {
  return <Profile />;
}

// 4. Consume Context
function Profile() {
  const a = useContext(ekContext); // access context data
  return <h1>Hello, {a} 👋</h1>;
}

export default App;

/*
What happened?

Normally, we would pass user → Parent → Child → Profile.

With Context API, Profile can directly grab user using useContext(ekContext) without drilling through.

*/
