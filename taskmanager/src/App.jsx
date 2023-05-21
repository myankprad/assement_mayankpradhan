import React, {useState} from 'react';
import './App.css';
import Task from './Task';
import Register from './components/Register';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
