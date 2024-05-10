const db = require("../Config/Sequelize");
const Role = db.RoleModel;

module.exports = {
  addRole: async (req, res) => {
    try {
      const data = req.body;
      const newRole = await Role.create(data);
      res.send(newRole);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Role.",
      });
    }
  },
  getAllRole: async (req, res) => {
    try {
      const result = await Role.findAll();
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
  getRoleById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Role.findByPk(id);
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
        message: err.message || "Some error occurred while retrieving the Role.",
      });
    }
  },
  updateRole: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Role.update(data, {
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
        message: err.message || "Some error occurred while updating the Role.",
      });
    }
  },
  updateRoleStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await Role.update(
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
        message: err.message || "Some error occurred while updating the Role status.",
      });
    }
  },
  deleteRoleById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Role.destroy({ where: { id: id } });
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
        message: err.message || "Some error occurred while deleting the Role.",
      });
    }
  },
};
