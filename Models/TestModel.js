module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define(
    "Test",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      test_name: Sequelize.STRING,
      description: Sequelize.STRING,
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
  return Test;
};
