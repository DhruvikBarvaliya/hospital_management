module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define("Inventory", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    item_id: Sequelize.STRING,
    item_name: Sequelize.STRING,
    quantity_available: Sequelize.INTEGER,
    unit_price: Sequelize.FLOAT,
    is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
    status: { type: Sequelize.BOOLEAN, defaultValue: true },
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER,
  }, {
    freezeTableName: true,
    timestamps: true
  });
  return Inventory;
};
