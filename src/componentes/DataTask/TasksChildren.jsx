import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai';


const TasksChildren = ({id, texto, completada, completarTarea, eliminarTarea}) => {
  return (
    <div className={completada ? 'tasks-container completada' :  'tasks-container'}>
      <div className="tasks-text"
        onClick={() => {
          completarTarea(id)
          completada ? alert("Tarea Incompleta") :  alert("Tarea Completa")}}
      >
        {texto}
      </div>
      <div className="tasks-icon-container"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tasks-icon"/>
      </div>
    </div>
  );
}

export default TasksChildren;