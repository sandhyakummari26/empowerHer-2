import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Todos from "./pages/Todos.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
