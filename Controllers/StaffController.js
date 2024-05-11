const db = require("../Config/Sequelize");
const Staff = db.StaffModel;
const bcrypt = require("bcryptjs");

module.exports = {
  addStaff: async (req, res) => {
    const data = req.body;
    if (!data.staff_first_name) {
      res.status(400).send({ message: "Staff Name Can not be Emapty" });
      return;
    }
    const staff = await Staff.findOne({
      where: {
        email: data.email,
      },
    });
    if (staff!= null) {
      return res
        .status(400)
        .json({
          status: false,
          message: "Staff already registered with this Email",
        });
    } else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(data.password, salt);
      data.password = password;
      Staff.create(data)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Staff.",
          });
        });
    }
  },
  getAllStaff: async (req, res) => {
    Staff.findAll().then((result) => {
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
  getStaffById: async (req, res) => {
    let id = req.params.id;
    Staff.findByPk(id).then((result) => {
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
  updateStaff: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    delete data.password;
    Staff.update(data, {
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
  updateStaffStatus: async (req, res) => {
    let {id,status} = req.params;
    Staff.update(
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
  deleteStaffById: async (req, res) => {
    let id = req.params.id;
    Staff.destroy({ where: { id: id } }).then((result) => {
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
