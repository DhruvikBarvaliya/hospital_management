const express = require('express');
const router = express.Router();
const AppointmenController = require('../Controllers/AppointmenController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Appointmen Router");
})

router.post('/appointmen', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AppointmenController.addAppointmen)
router.get('/appointmen', AppointmenController.getAllAppointmen)
router.get('/appointmen?:id', AppointmenController.getAppointmenById)
router.put('/appointmen?:id', AppointmenController.updateAppointmen)
router.patch('/appointmen/:id/:status', AppointmenController.updateAppointmenStatus)
router.delete('/appointmen?:id', AppointmenController.deleteAppointmenById)

module.exports = router;  