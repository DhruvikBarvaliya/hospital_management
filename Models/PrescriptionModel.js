module.exports = (sequelize, Sequelize) => {
  const Prescription = sequelize.define(
    "Prescription",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      medication_name: Sequelize.STRING,
      prescription_date: Sequelize.DATEONLY,
      prescription_cost: Sequelize.FLOAT,
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      status: { type: Sequelize.BOOLEAN, defaultValue: true },
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
