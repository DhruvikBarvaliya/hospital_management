
module.exports = (sequelize, Sequelize) => {
    const Hospital = sequelize.define('Hospital', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        hospital_name: { type: Sequelize.STRING },
        hospital_address: {
            type: DataTypes.INTEGER,
            references: {
                model: Address,
                key: 'id'
            }
        },
        hospital_phone_number: { type: Sequelize.STRING },

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
    return Hospital;
}