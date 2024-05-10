const db = require("../Config/Sequelize");
const Room = db.RoomModel;

module.exports = {
  addRoom: async (req, res) => {
    try {
      if (!req.body.staff_id) {
        return res.status(400).send({ message: "Staff Id Can not be Empty" });
      }
      const data = req.body;
      const createdRoom = await Room.create(data);
      res.send(createdRoom);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Room.",
      });
    }
  },
  getAllRoom: async (req, res) => {
    try {
      const result = await Room.findAll();
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
  getRoomById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Room.findByPk(id);
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
        message: err.message || "Some error occurred while retrieving the Room.",
      });
    }
  },
  updateRoom: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await Room.update(data, {
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
        message: err.message || "Some error occurred while updating the Room.",
      });
    }
  },
  updateRoomStatus: async (req, res) => {
    try {
      const { id, status } = req.params;
      const result = await Room.update(
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
        message: err.message || "Some error occurred while updating the Room status.",
      });
    }
  },
  deleteRoomById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Room.destroy({ where: { id: id } });
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
        message: err.message || "Some error occurred while deleting the Room.",
      });
    }
  },
};
