import { useState } from 'react';
import '../style/taskform.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const cambioForm = e => {
    setInput(e.target.value);
  }

  const envioTask = e => {
    e.preventDefault();
    const newTask = {
      // generar identificacion unica para actualizar
      id: uuidv4(),
      text: input,
      done: false
    }
    
    props.onSubmit(newTask);
  }

  return (
    <form className='Taskform' onSubmit={envioTask}>
      <input
        className='input-task'
        type='text'
        placeholder='Ingrese una tarea'
        name='text'
        onChange={cambioForm}
      />
      <button className='btn-task'>Agregar Tarea</button>
    </form>
  )
}

export default TaskForm
