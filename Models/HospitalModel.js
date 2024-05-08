module.exports = (sequelize, Sequelize) => {
  const Hospital = sequelize.define(
    "Hospital",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      hospital_name: Sequelize.STRING,
      hospital_address: Sequelize.INTEGER,
      hospital_phone_number: Sequelize.STRING,
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
  return Hospital;
};
