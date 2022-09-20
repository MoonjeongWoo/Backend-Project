const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'qwer1234',
    database: 'pick_me',
    multipleStatements: true
})

module.exports = cnn;