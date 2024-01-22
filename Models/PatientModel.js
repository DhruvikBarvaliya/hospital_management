
module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define('Patient', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_first_name: { type: Sequelize.STRING },
        patient_last_name: { type: Sequelize.STRING },
        patient_address: {
            type: Sequelize.INTEGER,
            references: {
                model: "Address",
                key: 'id'
            }
        },
        patient_phone_number: { type: Sequelize.STRING },
        pharmacy_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Pharmacy",
                key: 'id'
            }
        },
        date_of_birth: { type: Sequelize.DATEONLY },
        gender: { type: Sequelize.STRING },
        hospital_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Hospital",
                key: 'id'
            }
        },
        email: { type: Sequelize.STRING },
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
    return Patient;
}