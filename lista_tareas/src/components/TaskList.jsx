import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import '../style/tasklist.css';

function TaskList() {

  const [tareas, setTareas] = useState([]);

  const addTask = tarea => {
    console.log(tarea);
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();
      // tara nueva arriba + otras tareas
      const allTasks = [tarea, ...tareas];
      setTareas(allTasks);
    }
  }
  
  useEffect(()=>{
    let lista = localStorage.getItem('tasks')
    if(lista){
      setTareas(JSON.parse(lista))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tareas))
  }, [ tareas ])

  const deleteTask = id => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }

  const finishTask = id => {
    const allTasks = tareas.map(tarea => {
      if (tarea.id == id) {
        tarea.done = !tarea.done
      }
      return tarea;
    });
    setTareas(allTasks);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='contenedor-task-list'>
        {
          tareas.map((tarea) =>
            <TaskItem
              key={tarea.id}
              id={tarea.id}
              text={tarea.text}
              done={tarea.done}
              finishTask={finishTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}

export default TaskList;
