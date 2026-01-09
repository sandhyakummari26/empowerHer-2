// index.js
const express = require("express");
const os = require("os");
const dns = require("dns");
const { readFileContent } = require("./read");

const app = express();
const PORT = 3000;

// 1️⃣ Test Route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// 2️⃣ Read File Route
app.get("/readfile", (req, res) => {
  const content = readFileContent();
  res.send(content);
});

// 3️⃣ System Details Route
app.get("/systemdetails", (req, res) => {
  const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);
  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length;

  res.json({
    platform: os.platform(),
    totalMemory: `${totalMemoryGB} GB`,
    freeMemory: `${freeMemoryGB} GB`,
    cpuModel: cpuModel,
    cpuCores: cpuCores,
  });
});

// 4️⃣ Get IP Address Route
app.get("/getip", (req, res) => {
  const hostname = "masaischool.com";
  dns.lookup(hostname, { all: true }, (err, addresses) => {
    if (err) {
      return res.json({ error: err.message });
    }
    res.json({ hostname, addresses });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
