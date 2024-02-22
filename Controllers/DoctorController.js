const db = require("../Config/Sequelize");
const Doctor = db.DoctorModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addDoctor: async (req, res) => {
    if (!req.body.doctor_first_name) {
      res.status(400).send({ message: "Doctor First Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    const doctor = await Doctor.findOne({
      where: {
        email: data.email,
      },
    });

    if (doctor!=null) {
      return res
        .status(400)
        .json({
          status: false,
          message: "Doctor already registered with this Email",
        });
    } else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(data.password, salt);
      data.password = password;
      Doctor.create(data)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Doctor.",
          });
        });
    }
  },
  getAllDoctor: async (req, res) => {
    Doctor.findAll().then((result) => {
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
  getDoctorById: async (req, res) => {
    let id = req.params.id;
    Doctor.findByPk(id).then((result) => {
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
  updateDoctor: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    delete data.password;
    Doctor.update(data, {
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
  updateDoctorStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Doctor.update(
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
  deleteDoctorById: async (req, res) => {
    let id = req.params.id;
    Doctor.destroy({ where: { id: id } }).then((result) => {
      console.log(result);
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
