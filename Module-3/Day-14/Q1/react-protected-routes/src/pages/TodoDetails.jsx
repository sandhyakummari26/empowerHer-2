import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error(err));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h1>Todo Details</h1>
      <p>Todo ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>

      <Link to="/todos">Back to Todos</Link>
    </div>
  );
};

export default TodoDetails;
