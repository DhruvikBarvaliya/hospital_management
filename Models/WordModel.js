module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define(
    "Word",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      word_name: { type: Sequelize.STRING },
      capacity: { type: Sequelize.INTEGER },
      departmnet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Department",
          key: "id",
        },
      },
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
  return Word;
};
