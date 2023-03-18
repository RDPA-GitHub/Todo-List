import React from 'react';
import { FiSend } from 'react-icons/fi';
import '../../tasks-style/TaskForm.css';

const TaskForm = () => {
  return (
    <form action="" className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder='Ingrese una Tarea'
        name='texto'
      />
      <button className="task-button">
        <FiSend />
      </button>
    </form>
  );
}

export default TaskForm;