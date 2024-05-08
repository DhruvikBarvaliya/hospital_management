const db = require("../Config/Sequelize");
const Test = db.TestModel;

module.exports = {
  addTest: async (req, res) => {
    try {
      const data = req.body;
      const createdTest = await Test.create(data);
      res.send(createdTest);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Test.",
      });
    }
  },
  getAllTest: async (req, res) => {
    try {
      const result = await Test.findAll();
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
  getTestById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Test.findByPk(id);
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
        message: err.message || "Some error occurred while retrieving the Test.",
      });
    }
  },
  updateTest: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Test.update(data, {
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
        message: err.message || "Some error occurred while updating the Test.",
      });
    }
  },
  updateTestStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const result = await Test.update(
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
        message: err.message || "Some error occurred while updating the Test status.",
      });
    }
  },
  deleteTestById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Test.destroy({ where: { id: id } });
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
        message: err.message || "Some error occurred while deleting the Test.",
      });
    }
  },
};
