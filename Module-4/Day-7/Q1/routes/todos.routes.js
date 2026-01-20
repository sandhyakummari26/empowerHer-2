const express = require("express");
const fs = require("fs");
const path = require("path");
const rateLimiter = require("../middleware/rateLimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "..", "db.json");

// Helper to read DB
const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

// Helper to write DB
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// ➕ Create Todo
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

// 📄 Get All Todos (Rate Limited)
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// 📄 Get Single Todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(
    (t) => t.id === Number(req.params.todoId)
  );

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

// ✏️ Update Todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(
    (t) => t.id === Number(req.params.todoId)
  );

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json(db.todos[index]);
});

// ❌ Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const newTodos = db.todos.filter(
    (t) => t.id !== Number(req.params.todoId)
  );

  if (newTodos.length === db.todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos = newTodos;
  writeDB(db);

  res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
