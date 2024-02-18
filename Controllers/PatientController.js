const db = require("../Config/Sequelize");
const Patient = db.PatientModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addPatient: async (req, res) => {
    if (!req.body.patient_first_name) {
      res.status(400).send({ message: "Patient Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    const patient = await Patient.findOne({
      where: {
        email: data.email,
      },
    });
    if (patient!= null) {
      return res
        .status(400)
        .json({
          status: false,
          message: "Patient already registered with this Email",
        });
    } else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(data.password, salt);
      data.password = password;
      Patient.create(data)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Patient.",
          });
        });
    }
  },
  getAllPatient: async (req, res) => {
    Patient.findAll().then((result) => {
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
  getPatientById: async (req, res) => {
    let id = req.params.id;
    Patient.findByPk(id).then((result) => {
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
  updatePatient: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    delete data.password;
    Patient.update(data, {
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
  updatePatientStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Patient.update(
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
  deletePatientById: async (req, res) => {
    let id = req.params.id;
    Patient.destroy({ where: { id: id } }).then((result) => {
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
