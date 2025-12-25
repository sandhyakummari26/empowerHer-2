import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Todos from "./pages/Todos.jsx";
import TodoDetails from "./pages/TodoDetails.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* 1. Home (unprotected) */}
      <Route path="/" element={<Home />} />

      {/* 2. Login (unprotected) */}
      <Route path="/login" element={<Login />} />

      {/* 3. Todos (protected) */}
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />

      {/* 4. Todo details (protected + dynamic) */}
      <Route
        path="/todos/:todoId"
        element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
