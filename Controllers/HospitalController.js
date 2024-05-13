const db = require("../Config/Sequelize");
const Hospital = db.HospitalModel;

module.exports = {
  addHospital: async (req, res) => {
    try {
      if (!req.body.hospital_name) {
        return res
          .status(400)
          .send({ message: "Hospital Name Can not be Empty" });
      }
      const data = req.body;
      const createdHospital = await Hospital.create(data);
      res.send(createdHospital);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hospital.",
      });
    }
  },

  getAllHospital: async (req, res) => {
    try {
      const hospitals = await Hospital.findAll({
        where: {  is_active: true },
      });
      res.json({
        success: 1,
        message: "Data Received",
        data: hospitals,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },

  getHospitalById: async (req, res) => {
    try {
      const id = req.params.id;
      const hospital = await Hospital.findByPk(id,{
        where: {  is_active: true },
      });
      if (hospital) {
        res.json({
          success: 1,
          message: "Data Received",
          data: hospital,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Hospital.",
      });
    }
  },

  updateHospital: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedHospital = await Hospital.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedHospital,
      });
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Hospital.",
      });
    }
  },

  updateHospitalStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const updatedStatus = await Hospital.update(
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
        message:
          err.message ||
          "Some error occurred while updating the Hospital status.",
      });
    }
  },

  deleteHospitalById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedHospital = await Hospital.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedHospital,
      });
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the Hospital.",
      });
    }
  },
};
