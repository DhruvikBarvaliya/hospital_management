module.exports = (sequelize, Sequelize) => {
  const Hospital = sequelize.define(
    "Hospital",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      hospital_name: Sequelize.STRING,
      hospital_address: {
        type: Sequelize.JSONB,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      hospital_phone_number: Sequelize.STRING,
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
  return Hospital;
};
