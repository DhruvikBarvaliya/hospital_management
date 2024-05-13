module.exports = (sequelize, Sequelize) => {
  const Billing = sequelize.define(
    "Billing",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      bill_date: Sequelize.DATEONLY,
      total_amount: Sequelize.BIGINT,
      payment_status: {
        type: Sequelize.ENUM("pending", "cancelled", "paid"),
        defaultValue: "pending",
      },
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
  return Billing;
};
