module.exports = (sequelize, Sequelize) => {
  const Admission = sequelize.define(
    "Admission",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      admission_date: { type: Sequelize.DATEONLY },
      discharge_date: { type: Sequelize.DATEONLY },
      reason: { type: Sequelize.STRING },
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
  return Admission;
};
