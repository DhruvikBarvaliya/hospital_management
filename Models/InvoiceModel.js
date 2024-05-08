module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      service_description: Sequelize.STRING,
      cost: Sequelize.FLOAT,
      total: Sequelize.FLOAT,
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
  return Invoice;
};
