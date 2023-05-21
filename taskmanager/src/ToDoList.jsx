import React from 'react'
import { AiFillDelete } from "react-icons/ai"

const ToDoList = ({text, onSelect, id}) => {

    

  return (
    <>
   <div className='todo_style'>
   <AiFillDelete className='icon' onClick={()=>{
    onSelect(id)
   } } />
   <li>{text}</li> 
   </div>
    </>
  )
}

export default ToDoList