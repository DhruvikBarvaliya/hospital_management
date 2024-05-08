module.exports = (sequelize, Sequelize) => {
  const Prescription = sequelize.define(
    "Prescription",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      medication_name: Sequelize.STRING,
      prescription_date: Sequelize.DATEONLY,
      prescription_cost: Sequelize.FLOAT,
      doctor_id: Sequelize.INTEGER,
      medication_id: Sequelize.INTEGER,
      is_active: Sequelize.BOOLEAN,
      status: Sequelize.BOOLEAN,
      created_by: Sequelize.INTEGER,
      updated_by: Sequelize.INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Prescription;
};
