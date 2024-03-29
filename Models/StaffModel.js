module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define(
    "Staff",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "STAFF" },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Department",
          key: "id",
        },
      },
      staff_first_name: { type: Sequelize.STRING },
      staff_last_name: { type: Sequelize.STRING },
      staff_address: {
        type: Sequelize.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
      },
      staff_phone_number: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      position: { type: Sequelize.STRING },
      role: {
        type: Sequelize.INTEGER,
        references: {
          model: "Role",
          key: "id",
        },
      },
      salary: { type: Sequelize.BIGINT },
      shift: {
        type: Sequelize.ENUM("FIRST_SHIFT", "SECOND_SHIFT", "THIRD_SHIFT"),
        defaultValue: "FIRST_SHIFT",
      },
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
  return Staff;
};
