import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function Task() {
const [inputList, setInputList] = useState("");

const [Items, setItems] = useState([]);

const navigate = useNavigate()

   const logout = ()=>{
    localStorage.removeItem("token")
    navigate("/")
   }
    useEffect(()=>{
        if(!localStorage.getItem("token")){
         navigate("/")
        }
     },[])


const itemEvent=(e)=>{
   setInputList(e.target.value)
}

const listOfItems = ()=>{
   setItems((oldItems)=>{
    return [...oldItems, inputList]
   })
   setInputList("")
}

const deleteItems = (id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
     return index !== id
    })
  })
}

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className='h1'>Task List</h1>
        <br />
        <input className='input' type="text" placeholder="Add a task" onChange={itemEvent} value={inputList}/>
        <button className='button' onClick={listOfItems}> + </button>

        <ol>
         { Items.map((i, index) => {
           return <ToDoList key={index} id={index} text = {i} onSelect = {deleteItems} />
          })}
        </ol>
        <button className='butt' onClick={logout}>SignOut</button>
      </div>    
    </div>
    </>
  );
}

export default Task;
