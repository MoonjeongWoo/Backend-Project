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
db.CompanyInfo = require("./CompanyInfo")(sequelize, Sequelize);
db.UserInfo = require("./UserInfo")(sequelize, Sequelize);
db.ElementCareer = require("./ElementCareer")(sequelize, Sequelize);
db.ElementLocation = require("./ElementLocation")(sequelize, Sequelize);
db.ElementStack = require("./ElementStack")(sequelize, Sequelize);


module.exports = db;