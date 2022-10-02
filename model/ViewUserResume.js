const ViewUserResume = (Sequelize, DataTypes) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "viewUserResume",
        {
            uuid: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(100),
                allowNull: false,
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
            },
            updatedDate: {
                // allowNull: true,
                type: DataTypes.DATE, // 'TIMESTAMP'
                // defaultValue: Sequelize.fn('NOW')
            }

        },
        {
            tableName: "viewUserResume",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = ViewUserResume;
