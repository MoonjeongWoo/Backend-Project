const ElementStack = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "elementStack",
        {
            JAVA: {
                type: DataTypes.UUID,
            },
            Javascript: {
                type: DataTypes.UUID,
            },
            Python: {
                type: DataTypes.UUID,
            },
            R: {
                type: DataTypes.UUID,
            },
            C: {
                type: DataTypes.UUID,
            },
            "C++": {
                type: DataTypes.UUID,
            },
            "C#": {
                type: DataTypes.UUID,
            },
            PHP: {
                type: DataTypes.UUID,
            },
            Cobol: {
                type: DataTypes.UUID,
            },
            HTML: {
                type: DataTypes.UUID,
            },
            Linux: {
                type: DataTypes.UUID,
            },
            Kotlin: {
                type: DataTypes.UUID,
            },
            Dart: {
                type: DataTypes.UUID,
            },
            Go: {
                type: DataTypes.UUID,
            },
            "id": {
                type: DataTypes.UUID,
                primaryKey: true
            }
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
