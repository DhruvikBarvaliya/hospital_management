module.exports = (sequelize, Sequelize) => {
  const Pharmacy = sequelize.define(
    "Pharmacy",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      pharmacy_name: { type: Sequelize.STRING },
      pharmacy_phone_number: { type: Sequelize.STRING },
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
  return Pharmacy;
};
