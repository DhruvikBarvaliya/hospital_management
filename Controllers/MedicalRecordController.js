const db = require("../Config/Sequelize");
const MedicalRecord = db.MedicalRecordModel;

module.exports = {
  addMedicalRecord: async (req, res) => {
    try {
      if (!req.body.patient_id) {
        return res.status(400).send({ message: "Patient Id Can not be Empty" });
      }
      const data = req.body;
      const createdRecord = await MedicalRecord.create(data);
      res.send(createdRecord);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the MedicalRecord.",
      });
    }
  },

  getAllMedicalRecord: async (req, res) => {
    try {
      const result = await MedicalRecord.findAll();
      res.json({
        success: 1,
        message: "Data Received",
        data: result,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },

  getMedicalRecordById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await MedicalRecord.findByPk(id);
      if (result) {
        res.json({
          success: 1,
          message: "Data Received",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the MedicalRecord.",
      });
    }
  },

  updateMedicalRecord: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await MedicalRecord.update(data, {
        where: { id: id },
      });
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Update",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the MedicalRecord.",
      });
    }
  },

  updateMedicalRecordStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await MedicalRecord.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      if (result) {
        res.json({
          success: 1,
          message: "Data Updated",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Update",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the status of the MedicalRecord.",
      });
    }
  },

  deleteMedicalRecordById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await MedicalRecord.destroy({ where: { id: id } });
      if (result) {
        res.json({
          success: 1,
          message: "Data Deleted",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail To Delete",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the MedicalRecord.",
      });
    }
  },
};
