// 시퀄 컨버젼 시작.
const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(

    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.Main = require("./Main")(sequelize, Sequelize);

db.UserResume = require("./UserResume")(sequelize, Sequelize);
db.UserInfo = require("./UserInfo")(sequelize, Sequelize);
db.CompanyInfo = require("./CompanyInfo")(sequelize, Sequelize);

module.exports = db;