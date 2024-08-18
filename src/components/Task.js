import React from "react";

function Task({ task, onDeleteTask }) {
  const { id, text, category } = task;

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <div className="task" key={task.id}>
    <p>{text}</p>
    <p>Category: {category}</p>
    <button onClick={handleDeleteClick}>Delete</button>
  </div>
  );
}

export default Task;