const express = require('express');
const router = express.Router();
const DoctorController = require('../Controllers/DoctorController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Doctor Router");
})

router.post('/doctor', authorize([Role.ADMIN, Role.SUPER_ADMIN]), DoctorController.addDoctor)
router.get('/doctor', DoctorController.getAllDoctor)
router.get('/doctor?:id', DoctorController.getDoctorById)
router.put('/doctor?:id', DoctorController.updateDoctor)
router.patch('/doctor/:id/:status', DoctorController.updateDoctorStatus)
router.delete('/doctor?:id', DoctorController.deleteDoctorById)

module.exports = router;  