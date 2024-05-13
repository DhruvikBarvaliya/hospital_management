module.exports = (sequelize, Sequelize) => {
  const Admission = sequelize.define(
    "Admission",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      admission_date: Sequelize.DATEONLY,
      discharge_date: Sequelize.DATEONLY,
      reason: Sequelize.STRING,
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
  return Admission;
};
