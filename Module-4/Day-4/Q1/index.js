const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/home", (req, res) => {
  res.send("This is home page");
});

// Contact us route
app.get("/contactus", (req, res) => {
  res.send("Contact us at contact@contact.com");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
