import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {

  return (
    <>
      <div className='contenedor-principal'>
            <div className='contenedor-lista-tareas'>
              <h2>Lista de Tareas</h2>
              <TaskList />
            </div>
      </div>
    </>
  )
}

export default App
