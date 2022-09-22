// const {cnn} = require("./index");

// exports.saveIntroudce = (data, cb) => {
//     // sql = `SELECT uuid from users`

//     cb({result: 1})
// }


const introduce = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "Introduce",
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            stack: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            career: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            portfolio: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            etc: {
                type: DataTypes.STRING(100),
                allowNull: true
            }
        },
        {
            tableName: "Introduce",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = introduce;