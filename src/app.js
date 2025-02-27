const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user", (req, res) => {
  const user = {
    firstName: "kunal",
    lastName: "Thorat",
  };
  res.send(user);
});

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("hello from server");
});

app.listen(1111, () => {
  console.log("server started successfully");
});
