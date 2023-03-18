import React from "react";
import { useState } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";
import TasksChildren from "./TasksChildren";

const TaskList = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    console.log(tarea);
  }

  return (
    <>
      <TaskForm
        onSubmit={agregarTarea}
      />
      <div className="task-list-container">
        {
          tareas.map((tarea) =>
            <TasksChildren
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;