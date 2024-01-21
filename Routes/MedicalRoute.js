const express = require('express');
const router = express.Router();
const MedicalController = require('../Controllers/MedicalController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Medical Router");
})

router.post('/medical', authorize([Role.ADMIN, Role.SUPER_ADMIN]), MedicalController.addMedical)
router.get('/medical', MedicalController.getAllMedical)
router.get('/medical?:id', MedicalController.getMedicalById)
router.put('/medical?:id', MedicalController.updateMedical)
router.patch('/medical/:id/:status', MedicalController.updateMedicalStatus)
router.delete('/medical?:id', MedicalController.deleteMedicalById)

module.exports = router;  