module.exports = (sequelize, Sequelize) => {
  const Billing = sequelize.define(
    "Billing",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      doctore_id: Sequelize.INTEGER,
      admission_id: Sequelize.INTEGER,
      bill_date: Sequelize.DATEONLY,
      total_amount: Sequelize.BIGINT,
      payment_status: {
        type: Sequelize.ENUM("pending", "cancelled", "paid"),
        defaultValue: "pending",
      },
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
  return Billing;
};
