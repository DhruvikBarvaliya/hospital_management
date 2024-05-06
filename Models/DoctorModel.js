module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define(
    "Doctor",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "DOCTOR" },
      doctor_first_name: { type: Sequelize.STRING },
      doctore_last_name: { type: Sequelize.STRING },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Department",
          key: "id",
        },
      },
      doctore_phone_number: { type: Sequelize.STRING },
      specialization: {
        type: Sequelize.ENUM("Dermatology", "Diabetology", "Emergency"),
        defaultValue: "Dermatology",
      },
      availability: {
        type: Sequelize.ENUM("Available", "Not Available", "On Leave"),
        defaultValue: "Available",
      },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      salary: { type: Sequelize.BIGINT },
      hospital_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hospital",
          key: "id",
        },
      },
      qualification: { type: Sequelize.STRING },
      last_login: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      date_of_hire: {
        type: Sequelize.DATEONLY,
        defaultValue: sequelize.fn("NOW"),
      },
      date_of_birth: { type: Sequelize.DATEONLY },
      is_verified: { type: Sequelize.BOOLEAN, default: false },
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
  return Doctor;
};
