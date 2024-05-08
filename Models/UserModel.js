module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: {
        type: Sequelize.ENUM("SUPER_ADMIN", "ADMIN"),
        defaultValue: "ADMIN",
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: { type: Sequelize.STRING },
      phone_number: { type: Sequelize.STRING },
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
      is_active: { type: Sequelize.BOOLEAN, defaultValue: false },
      status: { type: Sequelize.BOOLEAN, defaultValue: false },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return User;
};
