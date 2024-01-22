
module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define('Address', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        streetAddress1: { type: Sequelize.STRING },
        streetAddress2: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        state: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        zip_code: { type: Sequelize.INTEGER },
        
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
    return Address;
}