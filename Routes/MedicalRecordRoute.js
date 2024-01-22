const express = require('express');
const router = express.Router();
const MedicalRecordController = require('../Controllers/MedicalRecordController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside MedicalRecord Router");
})

router.post('/medical-record', authorize([Role.ADMIN, Role.SUPER_ADMIN]), MedicalRecordController.addMedicalRecord)
router.get('/medical-record', MedicalRecordController.getAllMedicalRecord)
router.get('/medical-record?:id', MedicalRecordController.getMedicalRecordById)
router.put('/medical-record?:id', MedicalRecordController.updateMedicalRecord)
router.patch('/medical-record/:id/:status', MedicalRecordController.updateMedicalRecordStatus)
router.delete('/medical-record?:id', MedicalRecordController.deleteMedicalRecordById)

module.exports = router;  