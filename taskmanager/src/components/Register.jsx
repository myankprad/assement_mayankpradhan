import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../index.css"
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("")
    const[name, setName] = useState("")
    

    const handleName =(e) =>{
        setName(e.target.value)
       }

   const handleEmail =(e) =>{
    setEmail(e.target.value)
   }

   const handlePassword= (e)=>{
    setPassword(e.target.value)
   }
   const handleApi = () =>{
    console.log(email, password, name)
    axios.post('https://reqres.in/api/register', {
        email: email,
        password: password,
        name: name
    })
    .then(result =>{
        console.log(result.data)
        // alert("success")
        navigate("./task")
        localStorage.setItem("token", result.data.token)
    })
    .catch(err =>{
        console.log(err)
        alert("failed")
    })
   }

  return (
    <div >
        <h1>SIGN UP</h1>
        <div className='s-container'>
        Name: <input className='input' onChange={handleName} value={name} type="text" />
        EMail: <input className='input' onChange={handleEmail} value={email} type="email" />
        Password: <input className='input' onChange={handlePassword} value={password} type="password" name="" id="" />
        <button className='but' onClick={handleApi}>Register</button>
        </div>
       
    </div>
  )
}

export default Register
