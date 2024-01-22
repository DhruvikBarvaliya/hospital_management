
module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('Department', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        department_name: { type: Sequelize.STRING },
        hospital_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Hospital,
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
    return Department;
}