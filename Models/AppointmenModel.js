
module.exports = (sequelize, Sequelize) => {
    const Appointmen = sequelize.define('Appointmen', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Patient,
                key: 'id'
            }
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Doctor,
                key: 'id'
            }
        },
        date: { type: Sequelize.DATEONLY },
        time: { type: Sequelize.DATE },

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
    return Appointmen;
}