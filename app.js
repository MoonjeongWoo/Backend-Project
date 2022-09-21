const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  // secure: true,               // https에서만 사용 - 로컬에서는 사용 불가능
  cookie: {
    maxAge: 5000,
    httpOnly: true
  }
}))

const router = require("./routes");
app.use('/', router);

app.listen(port, function () {
  console.log("Server open :", port);
});
