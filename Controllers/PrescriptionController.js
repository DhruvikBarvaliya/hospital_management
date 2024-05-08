const db = require("../Config/Sequelize");
const Prescription = db.PrescriptionModel;

module.exports = {
  addPrescription: async (req, res) => {
    try {
      if (!req.body.patient_id) {
        return res.status(400).send({ message: "Patient Id Can not be Empty" });
      }
      const data = req.body;
      const newPrescription = await Prescription.create(data);
      res.send(newPrescription);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Prescription.",
      });
    }
  },

  getAllPrescription: async (req, res) => {
    try {
      const allPrescriptions = await Prescription.findAll();
      res.json({
        success: 1,
        message: "Data Received",
        data: allPrescriptions,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },

  getPrescriptionById: async (req, res) => {
    try {
      const id = req.params.id;
      const prescription = await Prescription.findByPk(id);
      if (prescription) {
        res.json({
          success: 1,
          message: "Data Received",
          data: prescription,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Prescription.",
      });
    }
  },

  updatePrescription: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedPrescription = await Prescription.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedPrescription,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Prescription.",
      });
    }
  },

  updatePrescriptionStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const updatedStatus = await Prescription.update(
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
        message: err.message || "Some error occurred while updating the Prescription status.",
      });
    }
  },

  deletePrescriptionById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPrescription = await Prescription.destroy({ where: { id: id } });
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedPrescription,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Prescription.",
      });
    }
  },
};
