
module.exports = (sequelize, Sequelize) => {
    const MedicalRecord = sequelize.define('MedicalRecord', {
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
        record_date: { type: Sequelize.DATEONLY },
        diagnosis: { type: Sequelize.STRING },
        prescription: { type: Sequelize.STRING },
        test_result: {
            type: DataTypes.INTEGER,
            references: {
                model: TestResult,
                key: 'id'
            }
        },
        notes: { type: Sequelize.STRING },
        problem: { type: Sequelize.STRING },
        date_of_examination: { type: Sequelize.DATEONLY },

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
    return MedicalRecord;
}