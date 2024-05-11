module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    "Department",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      department_name: { type: Sequelize.STRING },
      is_active: { type: Sequelize.BOOLEAN },
      status: { type: Sequelize.BOOLEAN },
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Department;
};
