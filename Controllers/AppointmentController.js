const db = require("../Config/Sequelize");
const Appointment = db.AppointmentModel;

module.exports = {
  addAppointment: async (req, res) => {
    try {
      if (!req.body.doctor_id) {
        return res.status(400).send({ message: "Doctor Id Can not be Empty" });
      }
      const data = req.body;
      const createdAppointment = await Appointment.create(data);
      res.send(createdAppointment);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Appointment.",
      });
    }
  },
  getAllAppointment: async (req, res) => {
    try {
      const appointments = await Appointment.findAll();
      res.json({
        success: 1,
        message: "Data Received",
        data: appointments,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getAppointmentById: async (req, res) => {
    try {
      const id = req.params.id;
      const appointment = await Appointment.findByPk(id);
      if (appointment) {
        res.json({
          success: 1,
          message: "Data Received",
          data: appointment,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Appointment.",
      });
    }
  },
  updateAppointment: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedAppointment = await Appointment.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedAppointment,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Appointment.",
      });
    }
  },
  updateAppointmentStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const updatedStatus = await Appointment.update(
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
        message: err.message || "Some error occurred while updating the Appointment status.",
      });
    }
  },
  deleteAppointmentById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedAppointment = await Appointment.destroy({ where: { id: id } });
      if (deletedAppointment) {
        res.json({
          success: 1,
          message: "Data Deleted",
          data: deletedAppointment,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Delete",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Appointment.",
      });
    }
  },
};
