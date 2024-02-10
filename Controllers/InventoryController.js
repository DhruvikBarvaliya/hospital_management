const db = require("../Config/Sequelize");
const Inventory = db.InventoryModel;

module.exports = {
  addInventory: async (req, res) => {
    if (!req.body.item_name) {
      res.status(400).send({ message: "Item Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    Inventory.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Inventory.",
        });
      });
  },
  getAllInventory: async (req, res) => {
    Inventory.findAll().then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Recived",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Recived",
        });
      }
    });
  },
  getInventoryById: async (req, res) => {
    let id = req.params.id;
    Inventory.findByPk(id).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Recived",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Recived",
        });
      }
    });
  },
  updateInventory: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Inventory.update(data, {
      where: { id: id },
    }).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Updated",
        });
      }
    });
  },
  updateInventoryStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Inventory.update(
      { status: status },
      {
        where: { id: id },
      }
    ).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Updated",
        });
      }
    });
  },
  deleteInventoryById: async (req, res) => {
    let id = req.params.id;
    Inventory.destroy({ where: { id: id } }).then((result) => {
      if (result) {
        res.json({
          success: 1,
          message: "Data Deleted",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Deleted",
        });
      }
    });
  },
};
