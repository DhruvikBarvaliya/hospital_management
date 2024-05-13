const db = require("../Config/Sequelize");
const Admission = db.AdmissionModel;

module.exports = {
  addAdmission: async (req, res) => {
    try {
      if (!req.body.patient_id) {
        return res.status(400).send({ message: "Patient Id Can not be Empty" });
      }
      const data = req.body;
      const createdData = await Admission.create(data);
      res.send(createdData);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Admission.",
      });
    }
  },

  getAllAdmission: async (req, res) => {
    try {
      const result = await Admission.findAll({
        where: {  is_active: true },
      });
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

  getAdmissionById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Admission.findByPk(id,{
        where: { is_active: true },
      });
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

  updateAdmission: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Admission.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: result,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail To Update",
      });
    }
  },

  updateAdmissionStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await Admission.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Updated",
        data: result,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail To Update",
      });
    }
  },

  deleteAdmissionById: async (req, res) => {
    try {
      const id = req.params.id;
      // const result = await Admission.destroy({ where: { id: id } });
      const result = await Admission.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Deleted",
        data: result,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail To Delete",
      });
    }
  },
};
