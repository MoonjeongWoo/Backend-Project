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
                defaultValue: null
            },
            Javascript: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Python: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            R: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            C: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "C++": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            "C#": {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            PHP: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Cobol: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            HTML: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Linux: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Kotlin: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Dart: {
                type: DataTypes.STRING(1),
                defaultValue: null
            },
            Go: {
                type: DataTypes.STRING(1),
                defaultValue: null
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
