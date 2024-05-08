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
    is_active: Sequelize.BOOLEAN,
    status: Sequelize.BOOLEAN,
    created_by: {
      type: Sequelize.INTEGER,
      references: {
        model: "Doctor",
        key: "id"
      }
    },
    updated_by: {
      type: Sequelize.INTEGER,
      references: {
        model: "Doctor",
        key: "id"
      }
    }
  }, {
    freezeTableName: true,
    timestamps: true
  });
  return Inventory;
};
