module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define(
    "Staff",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "STAFF" },
      staff_first_name: { type: Sequelize.STRING },
      staff_last_name: { type: Sequelize.STRING },
      staff_phone_number: { type: Sequelize.STRING },
      address: {
        type: Sequelize.JSONB,
        defaultValue: {},
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      position: { type: Sequelize.STRING },
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
  return Staff;
};
