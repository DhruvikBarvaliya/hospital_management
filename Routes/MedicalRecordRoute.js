const express = require('express');
const router = express.Router();
const MedicalRecordController = require('../Controllers/MedicalRecordController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside MedicalRecord Router");
})

router.post('/medical', authorize([Role.ADMIN, Role.SUPER_ADMIN]), MedicalRecordController.addMedicalRecord)
router.get('/medical', MedicalRecordController.getAllMedicalRecord)
router.get('/medical?:id', MedicalRecordController.getMedicalRecordById)
router.put('/medical?:id', MedicalRecordController.updateMedicalRecord)
router.patch('/medical/:id/:status', MedicalRecordController.updateMedicalRecordStatus)
router.delete('/medical?:id', MedicalRecordController.deleteMedicalRecordById)

module.exports = router;  