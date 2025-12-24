// pages/Todos.js
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10))) // first 10 todos
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="todos-grid">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? "completed" : "not completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
