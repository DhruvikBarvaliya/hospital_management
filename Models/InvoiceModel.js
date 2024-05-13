module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      service_description: Sequelize.STRING,
      cost: Sequelize.FLOAT,
      total: Sequelize.FLOAT,
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
  return Invoice;
};
