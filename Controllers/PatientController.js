const db = require("../Config/Sequelize");
const Patient = db.PatientModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addPatient: async (req, res) => {
    try {
      const data = req.body;

      if (!data.patient_first_name) {
        return res
          .status(400)
          .send({ message: "Patient Name Can not be Empty" });
      }

      const existingPatient = await Patient.findOne({
        where: { email: data["email"] },
      });

      if (existingPatient) {
        return res.status(400).json({
          status: false,
          message: "Patient already registered with this Email",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const createdPatient = await Patient.create({
        ...data,
        password: hashedPassword,
      });
      res.send(createdPatient);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the Patient.",
      });
    }
  },

  getAllPatient: async (req, res) => {
    try {
      const allPatients = await Patient.findAll();
      res.json({ success: 1, message: "Data Received", data: allPatients });
    } catch (error) {
      res.json({ success: 0, message: "Fail Received" });
    }
  },

  getPatientById: async (req, res) => {
    try {
      const id = req.params.id;
      const patient = await Patient.findByPk(id);
      if (patient) {
        res.json({ success: 1, message: "Data Received", data: patient });
      } else {
        res.json({ success: 0, message: "Fail Received" });
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while fetching the Patient.",
      });
    }
  },

  updatePatient: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      delete data.password;
      const updatedPatient = await Patient.update(data, { where: { id } });
      res.json({ success: 1, message: "Data Updated", data: updatedPatient });
    } catch (error) {
      res.json({ success: 0, message: "Fail To Update" });
    }
  },

  updatePatientStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedStatus = await Patient.update({ status }, { where: { id } });
      res.json({ success: 1, message: "Data Updated", data: updatedStatus });
    } catch (error) {
      res.json({ success: 0, message: "Fail To Update Status" });
    }
  },

  deletePatientById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPatient = await Patient.destroy({ where: { id } });
      res.json({ success: 1, message: "Data Deleted", data: deletedPatient });
    } catch (error) {
      res.json({ success: 0, message: "Fail To Delete" });
    }
  },
};
