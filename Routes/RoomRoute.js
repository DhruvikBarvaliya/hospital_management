const express = require('express');
const router = express.Router();
const RoomController = require('../Controllers/RoomController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Room Router");
})

router.post('/room', authorize([Role.ADMIN, Role.SUPER_ADMIN]), RoomController.addRoom)
router.get('/room', RoomController.getAllRoom)
router.get('/room?:id', RoomController.getRoomById)
router.put('/room?:id', RoomController.updateRoom)
router.patch('/room/:id/:status', RoomController.updateRoomStatus)
router.delete('/room?:id', RoomController.deleteRoomById)

module.exports = router;  