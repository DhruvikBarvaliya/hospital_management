module.exports = (sequelize, Sequelize) => {
  const TestResult = sequelize.define(
    "TestResult",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      result_details: Sequelize.STRING,
      test_date: Sequelize.DATEONLY,
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
  return TestResult;
};
