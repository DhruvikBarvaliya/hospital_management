module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      date: Sequelize.DATEONLY,
      time: Sequelize.DATE,
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      status: { type: Sequelize.BOOLEAN, defaultValue: true },
      appointment_status: {
        type: Sequelize.ENUM("Completed", "Pending", "Canceled"),
        defaultValue: "Pending",
      },
      created_by: Sequelize.INTEGER,
      updated_by: Sequelize.INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Appointment;
};
