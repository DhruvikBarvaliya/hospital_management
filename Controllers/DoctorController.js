const db = require("../Config/Sequelize");
const Doctor = db.DoctorModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addDoctor: async (req, res) => {
    try {
      const data = req.body;
      if (!data.doctor_first_name) {
        return res
          .status(400)
          .send({ message: "Doctor First Name Can not be Empty" });
      }

      const existingDoctor = await Doctor.findOne({ where: {email: data["email"] }});

      if (existingDoctor) {
        return res.status(400).json({
          status: false,
          message: "Doctor already registered with this Email",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash( req.body.password, salt);

      const newDoctor = await Doctor.create({...data,
        password: hashedPassword,
      });
      res.send(newDoctor);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the Doctor.",
      });
    }
  },

  getAllDoctor: async (req, res) => {
    try {
      const doctors = await Doctor.findAll({
        attributes: {
          exclude: [
            "role",
            "password",
            "otp",
            "forgot_otp",
            "is_verified",
            "is_active",
            "status",
          ],
        },
      });
      res.json({ success: 1, message: "Data Received", data: doctors });
    } catch (error) {
      res.json({ success: 0, message: "Fail Received" });
    }
  },

  getDoctorById: async (req, res) => {
    try {
      const id = req.params.id;
      const doctor = await Doctor.findByPk(id, {
        attributes: {
          exclude: [
            "role",
            "password",
            "otp",
            "forgot_otp",
            "is_verified",
            "is_active",
            "status",
          ],
        },
      });
      // attributes: ["doctor_first_name", "email"],
      if (doctor) {
        res.json({ success: 1, message: "Data Received", data: doctor });
      } else {
        res.json({ success: 0, message: "Fail Received" });
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while fetching the Doctor.",
      });
    }
  },

  updateDoctor: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      delete data.password;
      const [rowsUpdated] = await Doctor.update(data, { where: { id } });
      if (rowsUpdated) {
        res.json({ success: 1, message: "Data Updated", data: rowsUpdated });
      } else {
        res.json({ success: 0, message: "Fail To Update" });
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while updating the Doctor.",
      });
    }
  },

  updateDoctorStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const [rowsUpdated] = await Doctor.update({ status }, { where: { id } });
      if (rowsUpdated) {
        res.json({ success: 1, message: "Data Updated", data: rowsUpdated });
      } else {
        res.json({ success: 0, message: "Fail To Update" });
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while updating the Doctor status.",
      });
    }
  },

  deleteDoctorById: async (req, res) => {
    try {
      const id = req.params.id;
      const rowsDeleted = await Doctor.destroy({ where: { id } });
      if (rowsDeleted) {
        res.json({ success: 1, message: "Data Deleted", data: rowsDeleted });
      } else {
        res.json({ success: 0, message: "Fail To Delete" });
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while deleting the Doctor.",
      });
    }
  },
};
