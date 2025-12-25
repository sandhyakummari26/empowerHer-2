import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>
        Go to <Link to="/login">Login</Link> to view protected todos.
      </p>
    </div>
  );
};

export default Home;
