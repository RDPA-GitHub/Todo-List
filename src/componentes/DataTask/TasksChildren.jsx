import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai';


const TasksChildren = ({texto, completada}) => {
  return (
    <div className={completada ? 'tasks-container completada' :  'tasks-container'}>
      <div className="tasks-text">
        {texto}
      </div>
      <div className="tasks-icon-container">
        <AiOutlineCloseCircle className="tasks-icon"/>
      </div>
    </div>
  );
}

export default TasksChildren;