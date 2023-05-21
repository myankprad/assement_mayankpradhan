import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import {BsSunFill} from "react-icons/bs"
import {BsFillMoonFill}  from "react-icons/bs"

const ThemeToggler = () =>{
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <div
        style={{
            paddingBottom: "50px"
        }}
        onClick={()=>{
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}
        >
        <span>{themeMode === "light" ? <BsFillMoonFill size={70} />  : <BsSunFill size={70}/>  }</span>
        </div>
    )
}

export default ThemeToggler