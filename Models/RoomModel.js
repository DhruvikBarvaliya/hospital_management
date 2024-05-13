module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    "Room",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      admission_date: Sequelize.DATEONLY,
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
  return Room;
};
