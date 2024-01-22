
module.exports = (sequelize, Sequelize) => {
    const Pharmacy = sequelize.define('Pharmacy', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        pharmacy_name: { type: Sequelize.STRING },
        pharmacy_address: {
            type: DataTypes.INTEGER,
            references: {
                model: Address,
                key: 'id'
            }
        },
        pharmacy_phone_number: { type: Sequelize.STRING },

        is_active: { type: Sequelize.BOOLEAN },
        status: { type: Sequelize.BOOLEAN },
        created_by: {
            type: DataTypes.INTEGER,
            references: {
                model: Doctor,
                key: 'id'
            }
        },
        updated_by: {
            type: DataTypes.INTEGER,
            references: {
                model: Doctor,
                key: 'id'
            }
        },
    },
        {
            freezeTableName: true,
            timestamps: true
        })
    return Pharmacy;
}