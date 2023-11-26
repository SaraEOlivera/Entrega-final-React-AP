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
            <footer>
              <h4>Olivera Sara Elisa - 2023</h4>
            </footer>
      </div>
    </>
  )
}

export default App
