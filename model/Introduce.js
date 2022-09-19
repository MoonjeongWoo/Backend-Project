const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "비밀번호",
  database: "pick_me",
});
