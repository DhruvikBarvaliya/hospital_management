const db = require("../Config/Sequelize");
const TestResult = db.TestResultModel;

module.exports = {
  addTestResult: async (req, res) => {
    const data = req.body;
    if (!data.test_id) {
      res.status(400).send({ message: "Test Id Can not be Emapty" });
      return;
    }
    TestResult.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the TestResult.",
        });
      });
  },
  getAllTestResult: async (req, res) => {
    TestResult.findAll().then((result) => {
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
  getTestResultById: async (req, res) => {
    let id = req.params.id;
    TestResult.findByPk(id).then((result) => {
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
  updateTestResult: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    TestResult.update(data, {
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
  updateTestResultStatus: async (req, res) => {
    let {id,status} = req.params;
    TestResult.update(
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
  deleteTestResultById: async (req, res) => {
    let id = req.params.id;
    TestResult.destroy({ where: { id: id } }).then((result) => {
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
