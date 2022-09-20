const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'dhfpdhrhkwmdk',
    database: 'pickme',
    multipleStatements: true
})

module.exports = cnn;