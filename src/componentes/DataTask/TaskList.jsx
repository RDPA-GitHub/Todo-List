import React from "react";
import { useState } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";

const TaskList = () => {

  const [Tareas, setTareas] = useState([]);

  return (
    <>
      <TaskForm />
      <div className="task-list-container">
        
      </div>
    </>
  );
}

export default TaskList;