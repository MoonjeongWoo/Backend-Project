const ElementCareer = (Sequelize, DataTypes) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementCareer",
        {
            "0": {
                type: DataTypes.UUID,
            },
            "1": {
                type: DataTypes.UUID,
            },
            "2": {
                type: DataTypes.UUID,
            },
            "3": {
                type: DataTypes.UUID,
            },
            "4": {
                type: DataTypes.UUID,
            },
            "5": {
                type: DataTypes.UUID,
            },
            "6": {
                type: DataTypes.UUID,
            },
            "7": {
                type: DataTypes.UUID,
            },
            "8": {
                type: DataTypes.UUID,
            },
            "9": {
                type: DataTypes.UUID,
            },
            "10": {
                type: DataTypes.UUID,
            },
            "11": {
                type: DataTypes.UUID,
            },
            "12": {
                type: DataTypes.UUID,
            },
            "13": {
                type: DataTypes.UUID,
            },
            "14": {
                type: DataTypes.UUID,
            },
            "15": {
                type: DataTypes.UUID,
            },
            "16": {
                type: DataTypes.UUID,
            },
            "17": {
                type: DataTypes.UUID,
            },
            "18": {
                type: DataTypes.UUID,
            },
            "19": {
                type: DataTypes.UUID,
            },
            "20": {
                type: DataTypes.UUID,
            },
            "21": {
                type: DataTypes.UUID,
            },
            "id": {
                type: DataTypes.STRING(1),
                primaryKey: true
            }
        },
        {
            tableName: "elementCareer",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = ElementCareer;
