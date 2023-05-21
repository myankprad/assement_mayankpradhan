import React, { useContext } from 'react'
import ThemeContext from '../context/themeContext'
import AppTheme from '../color'
import "../App.css"

const Posts = () => {
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]
  return (
    <div
    style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
    }}
    >
   <div 
   style={{
    backgroundColor: `${currectTheme.backgroundColor}`,
}}
   className="container">
<div 
className="signUp">
  <h1 className="title">Create Account</h1>
  <input className="input" type="text" placeholder="Name" />
  <input className="input" type="email" placeholder="Email" />
  <input className="input" type="password" placeholder="Password" />
  <button 
   style={{
            backgroundColor: "26ae60",
            padding: "10px",
            fontSize: "20px",
            color: "#FFF",
            border: `${currectTheme.border}`
        }}
   className="button">Sign Up</button>
</div>
</div>
        
    </div>
  )
}

export default Posts