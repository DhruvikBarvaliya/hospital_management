const db = require("../Config/Sequelize");
const TestResult = db.TestResultModel;

module.exports = {
  addTestResult: async (req, res) => {
    try {
      const data = req.body;
      const newTestResult = await TestResult.create(data);
      res.send(newTestResult);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the TestResult.",
      });
    }
  },
  getAllTestResult: async (req, res) => {
    try {
      const result = await TestResult.findAll();
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
  getTestResultById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await TestResult.findByPk(id);
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
        message: err.message || "Some error occurred while retrieving the TestResult.",
      });
    }
  },
  updateTestResult: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedTestResult = await TestResult.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedTestResult,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the TestResult.",
      });
    }
  },
  updateTestResultStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const updatedTestResult = await TestResult.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedTestResult,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the TestResult status.",
      });
    }
  },
  deleteTestResultById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedTestResult = await TestResult.destroy({ where: { id: id } });
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedTestResult,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the TestResult.",
      });
    }
  },
};
