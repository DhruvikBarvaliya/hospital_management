const db = require("../Config/Sequelize");
const Inventory = db.InventoryModel;

module.exports = {
  addInventory: async (req, res) => {
    try {
      const data = req.body;
      const newInventory = await Inventory.create(data);
      res.send(newInventory);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Inventory.",
      });
    }
  },
  getAllInventory: async (req, res) => {
    try {
      const allInventory = await Inventory.findAll({
        where: {  is_active: true },
      });
      res.json({
        success: 1,
        message: "Data Received",
        data: allInventory,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getInventoryById: async (req, res) => {
    try {
      const id = req.params.id;
      const inventory = await Inventory.findByPk(id,{
        where: {  is_active: true },
      });
      if (inventory) {
        res.json({
          success: 1,
          message: "Data Received",
          data: inventory,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Inventory.",
      });
    }
  },
  updateInventory: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedInventory = await Inventory.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedInventory,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Inventory.",
      });
    }
  },
  updateInventoryStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedStatus = await Inventory.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedStatus,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Inventory status.",
      });
    }
  },
  deleteInventoryById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedInventory = await Inventory.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedInventory,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Inventory.",
      });
    }
  },
};
