
module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define('Doctor', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        doctor_first_name: { type: Sequelize.STRING },
        doctore_last_name: { type: Sequelize.STRING },
        department_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Department",
                key: 'id'
            }
        },
        doctore_phone_number: { type: Sequelize.STRING },
        specialization: { type: Sequelize.ENUM("Dermatology", "Diabetology", "Emergency"), defaultValue: "Dermatology" },
        email: { type: Sequelize.STRING },
        doctor_address: {
            type: Sequelize.INTEGER,
            references: {
                model: "Address",
                key: 'id'
            }
        },
        salary: { type: Sequelize.BIGINT },
        hospital_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Hospital",
                key: 'id'
            }
        },
        qualification: { type: Sequelize.STRING },

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
    return Doctor;
}