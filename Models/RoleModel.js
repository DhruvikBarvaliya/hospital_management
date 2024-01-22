
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        role_name: { type: Sequelize.STRING },
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
    return Role;
}