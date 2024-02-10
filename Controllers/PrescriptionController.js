const db = require("../Config/Sequelize");
const Prescription = db.PrescriptionModel;

module.exports = {
  addPrescription: async (req, res) => {
    if (!req.body.patient_id) {
      res.status(400).send({ message: "Patient Id Can not be Emapty" });
      return;
    }
    const data = req.body;
    Prescription.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the Prescription.",
        });
      });
  },
  getAllPrescription: async (req, res) => {
    Prescription.findAll().then((result) => {
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
  getPrescriptionById: async (req, res) => {
    let id = req.params.id;
    Prescription.findByPk(id).then((result) => {
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
  updatePrescription: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Prescription.update(data, {
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
  updatePrescriptionStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Prescription.update(
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
  deletePrescriptionById: async (req, res) => {
    let id = req.params.id;
    Prescription.destroy({ where: { id: id } }).then((result) => {
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
