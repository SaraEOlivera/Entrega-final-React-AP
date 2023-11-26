import '../style/Taskitem.css';

const TaskItem = ({id, text, done, finishTask, deleteTask }) => {
  return (
    <div className={ done ? 'task-item done' : 'task-item' }>

      <div className="task-text" onClick={ () => finishTask(id)}>
        {text}
        
      </div>
      <div>
      <button className="task-icon" onClick={ () => deleteTask(id) }>Borrar</button>

      </div>

    </div>

  );
}

export default TaskItem;
