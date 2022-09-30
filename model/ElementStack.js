const ElementStack = (Sequelize, DataTypes) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementStack",
        {
            "id": {
                type: DataTypes.UUID,
                primaryKey: true
            },
            JAVA: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Javascript: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Python: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            R: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            C: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "C++": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            "C#": {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            PHP: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Cobol: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            HTML: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Linux: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Kotlin: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Dart: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
            Go: {
                type: DataTypes.STRING(1),
                defaultValue: NULL
            },
        },
        {
            tableName: "elementStack",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = ElementStack;
