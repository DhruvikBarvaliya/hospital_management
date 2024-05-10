module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      doctor_id: Sequelize.INTEGER,
      date: Sequelize.DATEONLY,
      time: Sequelize.DATE,
      is_active: Sequelize.BOOLEAN,
      status: Sequelize.BOOLEAN,
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
