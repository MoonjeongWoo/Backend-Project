const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("form");
});

app.listen(port, function () {
  console.log("Server open :", port);
});
