// src/TodoItem.js
import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => onToggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
