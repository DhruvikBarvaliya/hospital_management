const db = require("../Config/Sequelize");
const Room = db.RoomModel;

module.exports = {
  addRoom: async (req, res) => {
    if (!req.body.staff_id) {
      res.status(400).send({ message: "Staff Id Can not be Emapty" });
      return;
    }
    const data = req.body;
    Room.create(data)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Room.",
        });
      });
  },
  getAllRoom: async (req, res) => {
    Room.findAll().then((result) => {
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
  getRoomById: async (req, res) => {
    let id = req.params.id;
    Room.findByPk(id).then((result) => {
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
  updateRoom: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Room.update(data, {
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
  updateRoomStatus: async (req, res) => {
    let id = req.params.id;
    let status = req.params;
    Room.update(
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
  deleteRoomById: async (req, res) => {
    let id = req.params.id;
    Room.destroy({ where: { id: id } }).then((result) => {
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
