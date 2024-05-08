module.exports = (sequelize, Sequelize) => {
  const TestResult = sequelize.define(
    "TestResult",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      test_id: Sequelize.INTEGER,
      result_details: Sequelize.STRING,
      test_date: Sequelize.DATEONLY,
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
  return TestResult;
};
