const db = require("../Config/Sequelize");
const Test = db.TestModel;

module.exports = {
  addTest: async (req, res) => {
    if (!req.body.test_name) {
      res.status(400).send({ message: "Test Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    Test.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Test.",
        });
      });
  },
  getAllTest: async (req, res) => {
    Test.findAll().then((result) => {
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
  getTestById: async (req, res) => {
    let id = req.params.id;
    Test.findByPk(id).then((result) => {
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
  updateTest: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Test.update(data, {
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
  updateTestStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Test.update(
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
  deleteTestById: async (req, res) => {
    let id = req.params.id;
    Test.destroy({ where: { id: id } }).then((result) => {
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
