module.exports = (sequelize, Sequelize) => {
  const Admission = sequelize.define(
    "Admission",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      word_id: Sequelize.INTEGER,
      admission_date: Sequelize.DATEONLY,
      discharge_date: Sequelize.DATEONLY,
      reason: Sequelize.STRING,
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
  return Admission;
};
