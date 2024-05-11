module.exports = (sequelize, Sequelize) => {
  const Hospital = sequelize.define(
    "Hospital",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      hospital_name: { type: Sequelize.STRING },
      hospital_phone_number: { type: Sequelize.STRING },
      address: {
        type: Sequelize.JSONB,
        defaultValue: {},
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
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
  return Hospital;
};
