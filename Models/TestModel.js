
module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define('Test', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        test_name: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        is_active: { type: Sequelize.BOOLEAN },
        status: { type: Sequelize.BOOLEAN },
        created_by: {
            type: Sequelize.INTEGER,
            references: {
                model: "Doctor",
                key: 'id'
            }
        },
        updated_by: {
            type: Sequelize.INTEGER,
            references: {
                model: "Doctor",
                key: 'id'
            }
        },
    },
        {
            freezeTableName: true,
            timestamps: true
        })
    return Test;
}