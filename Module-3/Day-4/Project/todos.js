import { displayTodos } from "./modules/displayTodos.js";

// Check login first
if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
}

async function fetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    displayTodos(data.slice(0, 20));  // show first 20
}
fetchTodos();
