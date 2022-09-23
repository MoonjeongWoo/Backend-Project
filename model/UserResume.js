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
            },
            createdAt: {
                // allowNull: true,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.fn('NOW'), // null?
            },
            updatedAt: {
                // allowNull: true,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.fn('NOW'),
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
