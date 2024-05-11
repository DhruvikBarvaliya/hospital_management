const db = require("../Config/Sequelize");
const Admission = db.AdmissionModel;

module.exports = {
  addAdmission: async (req, res) => {
    const data = req.body;
    if (!data.patient_id) {
      res.status(400).send({ message: "Patient Id Can not be Emapty" });
      return;
    }
    Admission.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Admission.",
        });
      });
  },
  getAllAdmission: async (req, res) => {
    Admission.findAll().then((result) => {
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
  getAdmissionById: async (req, res) => {
    let id = req.params.id;
    Admission.findByPk(id).then((result) => {
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
  updateAdmission: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Admission.update(data, {
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
  updateAdmissionStatus: async (req, res) => {
    let {id,status} = req.params;
    Admission.update(
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
  deleteAdmissionById: async (req, res) => {
    let id = req.params.id;
    Admission.destroy({ where: { id: id } }).then((result) => {
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
