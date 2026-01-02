import { useEffect, useState } from "react";
import { getTodos } from "../api/todoService";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data.slice(0, 20)));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            <p>
              <strong>{todo.title}</strong> —{" "}
              {todo.completed ? "Completed ✅" : "Pending ⏳"}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
