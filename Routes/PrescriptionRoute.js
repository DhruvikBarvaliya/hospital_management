const express = require('express');
const router = express.Router();
const PrescriptionController = require('../Controllers/PrescriptionController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside Prescription Router");
})

router.post('/prescription', authorize([Role.ADMIN, Role.SUPER_ADMIN]), PrescriptionController.addPrescription)
router.get('/prescription', PrescriptionController.getAllPrescription)
router.get('/prescription?:id', PrescriptionController.getPrescriptionById)
router.put('/prescription?:id', PrescriptionController.updatePrescription)
router.patch('/prescription/:id/:status', PrescriptionController.updatePrescriptionStatus)
router.delete('/prescription?:id', PrescriptionController.deletePrescriptionById)

module.exports = router;  