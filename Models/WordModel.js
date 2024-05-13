module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define(
    "Word",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      word_name: Sequelize.STRING,
      capacity: Sequelize.INTEGER,
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      status: { type: Sequelize.BOOLEAN, defaultValue: true },
      created_by: Sequelize.INTEGER,
      updated_by: Sequelize.INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return Word;
};
