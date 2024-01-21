const express = require('express');
const router = express.Router();
const PatientController = require('../Controllers/PatientController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Patient Router");
})

router.post('/patient', authorize([Role.ADMIN, Role.SUPER_ADMIN]), PatientController.addPatient)
router.get('/patient', PatientController.getAllPatient)
router.get('/patient?:id', PatientController.getPatientById)
router.put('/patient?:id', PatientController.updatePatient)
router.patch('/patient/:id/:status', PatientController.updatePatientStatus)
router.delete('/patient?:id', PatientController.deletePatientById)

module.exports = router;  