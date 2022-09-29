const ElementLocation = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementLocation",
        {
            Seoul: {
                type: DataTypes.UUID,
            },
            Incheon: {
                type: DataTypes.UUID,
            },
            Daejeon: {
                type: DataTypes.UUID,
            },
            Daegu: {
                type: DataTypes.UUID,
            },
            Pusan: {
                type: DataTypes.UUID,
            },
            Ulsan: {
                type: DataTypes.UUID,
            },
            Gwangju: {
                type: DataTypes.UUID,
            },
            Gyeonggi: {
                type: DataTypes.UUID,
            },
            "id": {
                type: DataTypes.UUID,
                primaryKey: true
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
