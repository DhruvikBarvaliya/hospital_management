const db = require("../Config/Sequelize");
const Address = db.AddressModel;

module.exports = {
  addAddress: async (req, res) => {
    try {
      const data = req.body;
      const createdAddress = await Address.create(data);
      res.send(createdAddress);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Address.",
      });
    }
  },
  getAllAddress: async (req, res) => {
    try {
      const result = await Address.findAll({
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
  getAddressById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Address.findOne(id,{
        where: {  is_active: true },
      });
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
        message: err.message || "Some error occurred while retrieving the Address.",
      });
    }
  },
  updateAddress: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Address.update(data, {
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
        message: err.message || "Some error occurred while updating the Address.",
      });
    }
  },
  updateAddressStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await Address.update(
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
        message: err.message || "Some error occurred while updating the Address status.",
      });
    }
  },
  deleteAddressById: async (req, res) => {
    try {
      const id = req.params.id;const result = await Address.update(
        { is_active: false },
        {
          where: { id: id },
        }
      );
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
        message: err.message || "Some error occurred while deleting the Address.",
      });
    }
  },
};
