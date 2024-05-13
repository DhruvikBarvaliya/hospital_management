const db = require("../Config/Sequelize");
const Pharmacy = db.PharmacyModel;

module.exports = {
  addPharmacy: async (req, res) => {
    try {
      const data = req.body;
      const newPharmacy = await Pharmacy.create(data);
      res.send(newPharmacy);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Pharmacy.",
      });
    }
  },
  getAllPharmacy: async (req, res) => {
    try {
      const allPharmacies = await Pharmacy.findAll({
        where: {  is_active: true },
      });
      res.json({
        success: 1,
        message: "Data Received",
        data: allPharmacies,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getPharmacyById: async (req, res) => {
    try {
      const id = req.params.id;
      const pharmacy = await Pharmacy.findByPk(id,{
        where: {  is_active: true },
      });
      if (pharmacy) {
        res.json({
          success: 1,
          message: "Data Received",
          data: pharmacy,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Pharmacy.",
      });
    }
  },
  updatePharmacy: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedPharmacy = await Pharmacy.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedPharmacy,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Pharmacy.",
      });
    }
  },
  updatePharmacyStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedPharmacy = await Pharmacy.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedPharmacy,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Pharmacy status.",
      });
    }
  },
  deletePharmacyById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPharmacy = await Pharmacy.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedPharmacy,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Pharmacy.",
      });
    }
  },
};
