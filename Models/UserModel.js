
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        role: { type: Sequelize.ENUM("Super_Admin", "Admin", "Doctore", "Staff", "Patient"), defaultValue: "Patient" },
        first_name: { type: Sequelize.STRING },
        last_name: { type: Sequelize.STRING },
        phone_number: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        doctor_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Doctor",
                key: 'id'
            }
        },
        patient_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Patient",
                key: 'id'
            }
        },
        staff_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Staff",
                key: 'id'
            }
        },
        is_verified: { type: Sequelize.BOOLEAN, default: false },
        is_active: { type: Sequelize.BOOLEAN, default: false },
        status: { type: Sequelize.BOOLEAN, default: false },
    },
        {
            freezeTableName: true,
            timestamps: true
        })
    return User;
}