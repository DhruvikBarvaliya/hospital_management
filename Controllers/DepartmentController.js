const db = require("../Config/Sequelize");
const Department = db.DepartmentModel;

module.exports = {
  addDepartment: async (req, res) => {
    if (!req.body.department_name) {
      res.status(400).send({ message: "Department Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    Department.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Department.",
        });
      });
  },
  getAllDepartment: async (req, res) => {
    Department.findAll().then((result) => {
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
  getDepartmentById: async (req, res) => {
    let id = req.params.id;
    Department.findByPk(id).then((result) => {
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
  updateDepartment: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Department.update(data, {
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
  updateDepartmentStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Department.update(
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
  deleteDepartmentById: async (req, res) => {
    let id = req.params.id;
    Department.destroy({ where: { id: id } }).then((result) => {
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
