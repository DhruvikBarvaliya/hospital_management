
module.exports = (sequelize, Sequelize) => {
    const TestResult = sequelize.define('TestResult', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Patient,
                key: 'id'
            }
        },
        test_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Test,
                key: 'id'
            }
        },
        result_details: { type: Sequelize.STRING },
        test_date: { type: Sequelize.DATEONLY },

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
    return TestResult;
}