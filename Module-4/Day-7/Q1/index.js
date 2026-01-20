const express = require("express");
const todoRouter = require("./routes/todos.routes");
const loggerMiddleware = require("./middleware/logger.middleware");

const app = express();

// JSON parser
app.use(express.json());

// App-level logger middleware
app.use(loggerMiddleware);

// Todo router
app.use("/todos", todoRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
