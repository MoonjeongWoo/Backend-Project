const User = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define(
        'user_2',
        {
            id: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            tableName: 'user_2',
            FreezeTableName: true,
            timeStamps: false
        }
    );
    return model
};

module.exports = User;
