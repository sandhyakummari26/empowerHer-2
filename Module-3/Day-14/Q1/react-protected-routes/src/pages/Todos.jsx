import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(TODOS_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10))) // first 10 todos
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h1>Todos Page (Protected)</h1>
      <button onClick={handleLogout}>Logout</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
