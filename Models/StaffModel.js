
module.exports = (sequelize, Sequelize) => {
    const Staff = sequelize.define('Staff', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Department,
                key: 'id'
            }
        },
        staff_first_name: { type: Sequelize.STRING },
        staff_last_name: { type: Sequelize.DATEONLY },
        staff_address: {
            type: DataTypes.INTEGER,
            references: {
                model: Address,
                key: 'id'
            }
        },
        staff_phone_number: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        position: { type: Sequelize.STRING },
        role: {
            type: DataTypes.INTEGER,
            references: {
                model: Role,
                key: 'id'
            }
        },

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
    return Staff;
}