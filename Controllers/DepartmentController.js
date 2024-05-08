const db = require("../Config/Sequelize");
const Department = db.DepartmentModel;

module.exports = {
  addDepartment: async (req, res) => {
    try {
      const data = req.body;
      const newDepartment = await Department.create(data);
      res.send(newDepartment);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Department.",
      });
    }
  },
  getAllDepartment: async (req, res) => {
    try {
      const departments = await Department.findAll();
      res.json({
        success: 1,
        message: "Data Received",
        data: departments,
      });
    } catch (err) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },
  getDepartmentById: async (req, res) => {
    try {
      const id = req.params.id;
      const department = await Department.findByPk(id);
      if (department) {
        res.json({
          success: 1,
          message: "Data Received",
          data: department,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the Department.",
      });
    }
  },
  updateDepartment: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedDepartment = await Department.update(data, {
        where: { id: id },
      });
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedDepartment,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Department.",
      });
    }
  },
  updateDepartmentStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const updatedDepartment = await Department.update(
        { status: status },
        {
          where: { id: id },
        }
      );
      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedDepartment,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Department status.",
      });
    }
  },
  deleteDepartmentById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedDepartment = await Department.destroy({ where: { id: id } });
      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedDepartment,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the Department.",
      });
    }
  },
};
