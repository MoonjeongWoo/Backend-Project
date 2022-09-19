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

db.User = require("./User")(sequelize, Sequelize);
/* db.Payment = require("./Payment")(sequelize, Sequelize);

db.User.hasMany(db.Payment,  {
    foreignKey: 'user_ID',
    sourceKey: "ID",
    onDelete: "cascade"
});

db.Payment.belongTo(db.User, {
    foreignKey: "user_ID",
    sourceKey: "ID",
    onDelete: "cascade",
}) */ // 포린키 구현 코드 일부.


module.exports = db;