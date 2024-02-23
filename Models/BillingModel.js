module.exports = (sequelize, Sequelize) => {
  const Billing = sequelize.define(
    "Billing",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      bill_date: { type: Sequelize.DATEONLY },
      total_amount: { type: Sequelize.BIGINT },
      payment_status: {
        type: Sequelize.ENUM("pending", "cancelled", "paid"),
        defaultValue: "pending",
      },
      is_active: { type: Sequelize.BOOLEAN },
      status: { type: Sequelize.BOOLEAN },
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Billing;
};
