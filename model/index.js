const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'pickme',
    multipleStatements: true
})

module.exports = cnn;