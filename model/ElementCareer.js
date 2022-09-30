const ElementCareer = (Sequelize, DataTypes) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementCareer",
        {
            "id": {
                type: DataTypes.UUID,
                primaryKey: true
            },
            "0": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "1": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "2": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "3": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "4": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "5": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "6": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "7": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "8": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "9": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "10": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "11": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "12": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "13": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "14": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "15": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "16": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "17": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "18": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "19": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "20": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "21": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            }
        },
        {
            tableName: "elementCareer",
            FreezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};

module.exports = ElementCareer;
