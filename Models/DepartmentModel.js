module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    "Department",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      department_name: Sequelize.STRING,
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
  return Department;
};
