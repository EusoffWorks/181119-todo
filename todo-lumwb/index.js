const express = require("express");
const app = express();
const todos = [];

app.get("/", (req, res) => {
  let output = "";
  for (let i = 0; i < todos.length; i++) {
    output += todos[i] + "</br>";
  }
  res.send(output);
});

app.get("/todo", (req, res) => {
  todos.push(req.query.item);
  res.send("ok");
})

app.listen(8080);
