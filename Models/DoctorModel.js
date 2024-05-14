module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define(
    "Doctor",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "DOCTOR" },
      doctor_first_name: { type: Sequelize.STRING },
      doctor_last_name: { type: Sequelize.STRING },
      doctor_phone_number: { type: Sequelize.STRING },
      specialization: { type: Sequelize.ENUM("Dermatology", "Diabetology", "Emergency"), defaultValue: "Dermatology" },
      availability: { type: Sequelize.ENUM("Available", "Not Available", "On Leave"), defaultValue: "Available" },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      doctor_address: {
        type: Sequelize.JSONB,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      salary: { type: Sequelize.BIGINT },
      qualification: { type: Sequelize.STRING },
      last_login: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      date_of_hire: { type: Sequelize.DATEONLY, defaultValue: sequelize.fn("NOW") },
      date_of_birth: { type: Sequelize.DATEONLY },
      is_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      status: { type: Sequelize.BOOLEAN, defaultValue: true },
      created_by: { type: Sequelize.INTEGER },
      updated_by: { type: Sequelize.INTEGER },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Doctor;
};
