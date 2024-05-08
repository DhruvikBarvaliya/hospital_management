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
      const allInvoices = await Invoice.findAll();
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
      const invoice = await Invoice.findByPk(id);
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
      const id = req.params.id;
      const status = req.body.status;
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
      const deletedInvoice = await Invoice.destroy({ where: { id: id } });
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
