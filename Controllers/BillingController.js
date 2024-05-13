const db = require("../Config/Sequelize");
const Billing = db.BillingModel;

module.exports = {
  addBilling: async (req, res) => {
    try {
      const data = req.body;
      const newBilling = await Billing.create(data);
      res.send(newBilling);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Billing.",
      });
    }
  },
  getAllBilling: async (req, res) => {
    try {
      const allBilling = await Billing.findAll({
        where: {  is_active: true },
      });
      res.json({
        success: 1,
        message: "Data Received",
        data: allBilling,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getBillingById: async (req, res) => {
    try {
      const id = req.params.id;
      const billing = await Billing.findByPk(id,{
        where: {  is_active: true },
      });
      if (billing) {
        res.json({
          success: 1,
          message: "Data Received",
          data: billing,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Billing.",
      });
    }
  },
  updateBilling: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedBilling = await Billing.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedBilling,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Billing.",
      });
    }
  },
  updateBillingStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedStatus = await Billing.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Status Updated",
        data: updatedStatus,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the status of Billing.",
      });
    }
  },
  deleteBillingById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedBilling = await Billing.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedBilling,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Billing.",
      });
    }
  },
};
