const db = require("../Config/Sequelize");
const Appointment = db.AppointmentModel;

module.exports = {
  addAppointment: async (req, res) => {
    if (!req.body.doctor_id) {
      res.status(400).send({ message: "Doctor Id Can not be Emapty" });
      return;
    }
    const data = req.body;
    Appointment.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the Appointment.",
        });
      });
  },
  getAllAppointment: async (req, res) => {
    Appointment.findAll().then((result) => {
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
  getAppointmentById: async (req, res) => {
    let id = req.params.id;
    Appointment.findByPk(id).then((result) => {
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
  updateAppointment: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Appointment.update(data, {
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
  updateAppointmentStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Appointment.update(
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
  deleteAppointmentById: async (req, res) => {
    let id = req.params.id;
    Appointment.destroy({ where: { id: id } }).then((result) => {
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
