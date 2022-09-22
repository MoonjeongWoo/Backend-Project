// const mysql = require("mysql");

// const cnn = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'qwer1234',
//     database: 'pick_me',
//     multipleStatements: true
// })

// module.exports = cnn;


// 시퀄 컨버젼 시작.
const Sequelize = require("sequelize");
const config = require("../config/config.json")["conv_test"];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Main = require("./Main")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

module.exports = db;