const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "todos.html";
    } else {
        alert("Invalid credentials");
    }
});
