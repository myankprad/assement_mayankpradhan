import React, { useState } from "react";
// import "./App.css";
// import Posts from "./components/Posts";
import ThemeContext from "./context/themeContext";
import Header from "./components/Header";
import Posts from "./components/Posts";


function App() {
  const themeHook = useState("light")
  return(
    <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
          <Posts />
        </div>
    </ThemeContext.Provider>
  )
 
}

export default App;



