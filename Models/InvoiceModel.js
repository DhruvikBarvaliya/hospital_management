
module.exports = (sequelize, Sequelize) => {
    const Invoice = sequelize.define('Invoice', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        patient_id: {             type: DataTypes.INTEGER,
            references: {
                model: Patient,
                key: 'id'
            } },
        service_description: { type: Sequelize.STRING },
        cost: { type: Sequelize.FLOAT },
        total: { type: Sequelize.FLOAT },

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
    return Invoice;
}