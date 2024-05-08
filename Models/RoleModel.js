module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "Role",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role_name: Sequelize.STRING,
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
  return Role;
};
