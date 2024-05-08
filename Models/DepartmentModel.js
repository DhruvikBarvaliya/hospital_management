module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    "Department",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      department_name: Sequelize.STRING,
      hospital_id: Sequelize.INTEGER,
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
  return Department;
};
