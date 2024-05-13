const db = require("../Config/Sequelize");
const Invoice = db.InvoiceModel;

module.exports = {
  addInvoice: async (req, res) => {
    try {
      const data = req.body;
      const newInvoice = await Invoice.create(data);
      res.send(newInvoice);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Invoice.",
      });
    }
  },
  getAllInvoice: async (req, res) => {
    try {
      const allInvoices = await Invoice.findAll({
        where: {  is_active: true },
      });
      res.json({
        success: 1,
        message: "Data Received",
        data: allInvoices,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getInvoiceById: async (req, res) => {
    try {
      const id = req.params.id;
      const invoice = await Invoice.findByPk(id,{
        where: {  is_active: true },
      });
      if (invoice) {
        res.json({
          success: 1,
          message: "Data Received",
          data: invoice,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Invoice.",
      });
    }
  },
  updateInvoice: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedInvoice = await Invoice.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedInvoice,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Invoice.",
      });
    }
  },
  updateInvoiceStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedStatus = await Invoice.update(
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
        message: err.message || "Some error occurred while updating the Invoice status.",
      });
    }
  },
  deleteInvoiceById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedInvoice = await Invoice.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedInvoice,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Invoice.",
      });
    }
  },
};
