const db = require("../Config/Sequelize");
const Staff = db.StaffModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addStaff: async (req, res) => {
    try {
      const { staff_first_name, email, password } = req.body;

      if (!staff_first_name) {
        return res.status(400).send({ message: "Staff Name Can not be Empty" });
      }

      const existingStaff = await Staff.findOne({ where: { email } });

      if (existingStaff) {
        return res.status(400).json({
          status: false,
          message: "Staff already registered with this Email",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newStaff = await Staff.create({ staff_first_name, email, password: hashedPassword });
      res.send(newStaff);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the Staff.",
      });
    }
  },

  getAllStaff: async (req, res) => {
    try {
      const allStaff = await Staff.findAll();

      res.json({
        success: 1,
        message: "Data Received",
        data: allStaff,
      });
    } catch (error) {
      res.json({
        success: 0,
        message: "Fail Received",
      });
    }
  },

  getStaffById: async (req, res) => {
    try {
      const id = req.params.id;
      const staffById = await Staff.findByPk(id);

      if (staffById) {
        res.json({
          success: 1,
          message: "Data Received",
          data: staffById,
        });
      } else {
        res.json({
          success: 0,
          message: "Fail Received",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving the Staff.",
      });
    }
  },

  updateStaff: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      delete data.password;

      const updatedStaff = await Staff.update(data, { where: { id } });

      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedStaff,
      });
    } catch (error) {
      res.json({
        success: 0,
        message: "Fail To Update",
      });
    }
  },

  updateStaffStatus: async (req, res) => {
    try {
      const { id, status } = req.params;

      const updatedStatus = await Staff.update({ status }, { where: { id } });

      res.json({
        success: 1,
        message: "Data Updated",
        data: updatedStatus,
      });
    } catch (error) {
      res.json({
        success: 0,
        message: "Fail To Update",
      });
    }
  },

  deleteStaffById: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedStaff = await Staff.destroy({ where: { id } });

      res.json({
        success: 1,
        message: "Data Deleted",
        data: deletedStaff,
      });
    } catch (error) {
      res.json({
        success: 0,
        message: "Fail To Delete",
      });
    }
  },
};
