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

db.UserResume = require("./UserResume.js")(sequelize, Sequelize);
db.CompanyInfo = require("./CompanyInfo.js")(sequelize, Sequelize);
db.UserInfo = require("./UserInfo.js")(sequelize, Sequelize);
db.ElementCareer = require("./ElementCareer.js")(sequelize, Sequelize);
db.ElementLocation = require("./ElementLocation.js")(sequelize, Sequelize);
db.ElementStack = require("./ElementStack.js")(sequelize, Sequelize);


module.exports = db;