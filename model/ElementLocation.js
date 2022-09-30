const ElementLocation = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementLocation",
        {
            "id": {
                type: DataTypes.UUID,
                primaryKey: true
            },
            Seoul: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Incheon: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Daejeon: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Daegu: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Pusan: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Ulsan: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Gwangju: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Gyeonggi: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            }
        },
        {
            tableName: "elementLocation",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = ElementLocation;
