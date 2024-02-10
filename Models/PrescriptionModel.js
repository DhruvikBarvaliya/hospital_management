module.exports = (sequelize, Sequelize) => {
  const Prescription = sequelize.define(
    "Prescription",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patient",
          key: "id",
        },
      },
      medication_name: { type: Sequelize.STRING },
      prescription_date: { type: Sequelize.DATEONLY },
      prescription_cost: { type: Sequelize.FLOAT },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
      medication_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "MedicalRecord",
          key: "id",
        },
      },
      is_active: { type: Sequelize.BOOLEAN },
      status: { type: Sequelize.BOOLEAN },
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Prescription;
};
