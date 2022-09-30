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
                defaultValue: null
            },
            "1": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "2": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "3": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "4": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "5": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "6": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "7": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "8": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "9": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "10": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "11": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "12": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "13": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "14": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "15": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "16": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "17": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "18": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "19": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "20": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "21": {
                type: DataTypes.STRING(1),
                defaultValue: null
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
