module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      streetAddress1: Sequelize.STRING,
      streetAddress2: Sequelize.STRING,
      country: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      zip_code: Sequelize.INTEGER,
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
  return Address;
};
