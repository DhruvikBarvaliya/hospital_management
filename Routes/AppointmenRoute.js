const express = require('express');
const router = express.Router();
const AppointmentController = require('../Controllers/AppointmentController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Appointment Router");
})

router.post('/appointment', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AppointmentController.addAppointment)
router.get('/appointment', AppointmentController.getAllAppointment)
router.get('/appointment?:id', AppointmentController.getAppointmentById)
router.put('/appointment?:id', AppointmentController.updateAppointment)
router.patch('/appointment/:id/:status', AppointmentController.updateAppointmentStatus)
router.delete('/appointment?:id', AppointmentController.deleteAppointmentById)

module.exports = router;  