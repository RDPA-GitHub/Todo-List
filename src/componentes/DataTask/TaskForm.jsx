import React from 'react';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
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
        <HiOutlineViewGridAdd />
      </button>
    </form>
  );
}

export default TaskForm;