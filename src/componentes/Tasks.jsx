import React from "react";
import TaskForm from "./DataTask/TaskForm";
import "../tasks-style/Tasks.css";


const Tasks = () => {
  return (
    <div className="task-applications">
      <div className="tasks-list-principal">
        <h1>TODO LIST </h1>
          <TaskForm />
      </div>
    </div>
  );
}

export default Tasks;
