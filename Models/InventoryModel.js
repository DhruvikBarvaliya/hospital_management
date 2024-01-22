
module.exports = (sequelize, Sequelize) => {
    const Inventory = sequelize.define('Inventory', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        item_id: { type: Sequelize.STRING },
        item_name: { type: Sequelize.STRING },
        quantity_available: { type: Sequelize.INTEGER },
        unit_price: { type: Sequelize.FLOAT },

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
    return Inventory;
}