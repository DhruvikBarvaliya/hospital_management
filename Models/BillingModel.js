
module.exports = (sequelize, Sequelize) => {
    const Billing = sequelize.define('Billing', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Patient",
                key: 'id'
            }
        },
        doctore_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Doctor",
                key: 'id'
            }
        },
        admission_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Admission",
                key: 'id'
            }
        },
        bill_date: { type: Sequelize.DATEONLY },
        total_amount: { type: Sequelize.BIGINT },
        payment_status: { type: Sequelize.STRING },
        is_active: { type: Sequelize.BOOLEAN },
        status: { type: Sequelize.ENUM("pending", "cancelled", "paid") },
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
    return Billing;
}