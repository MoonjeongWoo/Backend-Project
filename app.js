const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use('/', router);

app.get("/", function(req,res){
  res.render("login");
});

app.listen(port, function () {
  console.log("Server open :", port);
});
