module.exports = (sequelize, Sequelize) => {
  const Pharmacy = sequelize.define(
    "Pharmacy",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      pharmacy_name: Sequelize.STRING,
      pharmacy_address: Sequelize.INTEGER,
      pharmacy_phone_number: Sequelize.STRING,
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
  return Pharmacy;
};
