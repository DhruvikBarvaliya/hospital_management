
module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define('Appointment', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Patient",
                key: 'id'
            }
        },
        doctor_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Doctor",
                key: 'id'
            }
        },
        date: { type: Sequelize.DATEONLY },
        time: { type: Sequelize.DATE },
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
    return Appointment;
}