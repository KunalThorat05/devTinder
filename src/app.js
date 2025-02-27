const express = require("express");

const app = express();

// Handle /okie route first
app.use("/okie", (req, res) => {
  res.send("hello");
});

// Handle / route
app.use("/", (req, res) => {
  res.send("hello from server");
});

app.listen(1111, () => {
  console.log("server started successfully");
});
