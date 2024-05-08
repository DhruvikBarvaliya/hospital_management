module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define(
    "Staff",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: Sequelize.STRING, defaultValue: "STAFF" },
      department_id: { type: Sequelize.INTEGER },
      staff_first_name: { type: Sequelize.STRING },
      staff_last_name: { type: Sequelize.STRING },
      staff_address: { type: Sequelize.INTEGER },
      staff_phone_number: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      otp: { type: Sequelize.INTEGER },
      forgot_otp: { type: Sequelize.INTEGER },
      position: { type: Sequelize.STRING },
      role_id: { type: Sequelize.INTEGER },
      salary: { type: Sequelize.BIGINT },
      shift: { type: Sequelize.ENUM("FIRST_SHIFT", "SECOND_SHIFT", "THIRD_SHIFT"), defaultValue: "FIRST_SHIFT" },
      last_login: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      date_of_hire: { type: Sequelize.DATEONLY, defaultValue: sequelize.fn("NOW") },
      date_of_birth: { type: Sequelize.DATEONLY },
      is_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      is_active: { type: Sequelize.BOOLEAN },
      status: { type: Sequelize.BOOLEAN },
      created_by: { type: Sequelize.INTEGER },
      updated_by: { type: Sequelize.INTEGER },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  Staff.belongsTo(sequelize.models.Department, { foreignKey: 'department_id' });
  Staff.belongsTo(sequelize.models.Address, { foreignKey: 'staff_address' });
  Staff.belongsTo(sequelize.models.Role, { foreignKey: 'role_id' });
  Staff.belongsTo(sequelize.models.Doctor, { foreignKey: 'created_by' });
  Staff.belongsTo(sequelize.models.Doctor, { foreignKey: 'updated_by' });

  return Staff;
};
