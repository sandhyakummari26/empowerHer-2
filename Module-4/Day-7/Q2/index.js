const express = require("express");
const userRouter = require("./routes/users.routes");

const app = express();

// JSON middleware (not for multipart, but required)
app.use(express.json());

// Routes
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
