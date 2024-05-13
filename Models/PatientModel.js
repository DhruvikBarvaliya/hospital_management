module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define(
    "Patient",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "PATIENT" },
      patient_first_name: { type: Sequelize.STRING },
      patient_last_name: { type: Sequelize.STRING },
      patient_address: {
        type: Sequelize.JSONB,
        defaultValue: {},
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      patient_phone_number: { type: Sequelize.STRING },
      gender: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      last_login: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      date_of_hire: {
        type: Sequelize.DATEONLY,
        defaultValue: sequelize.fn("NOW"),
      },
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
  return Patient;
};
