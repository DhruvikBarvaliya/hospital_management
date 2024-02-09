
module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define('Patient', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        role: { type: Sequelize.STRING, defaultValue: "PATIENT" },
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
        gender: { type: Sequelize.STRING },
        hospital_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Hospital",
                key: 'id'
            }
        },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        otp: { type: Sequelize.INTEGER },
        forgot_otp: { type: Sequelize.INTEGER },
        last_login: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, },
        date_of_hire: { type: Sequelize.DATEONLY, defaultValue: sequelize.fn('NOW') },
        date_of_birth: { type: Sequelize.DATEONLY },
        is_verified: { type: Sequelize.BOOLEAN, default: false },
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