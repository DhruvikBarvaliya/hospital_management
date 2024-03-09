module.exports = (sequelize, Sequelize) => {
  const TestResult = sequelize.define(
    "TestResult",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      result_details: { type: Sequelize.STRING },
      test_date: { type: Sequelize.DATEONLY },
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
  return TestResult;
};
