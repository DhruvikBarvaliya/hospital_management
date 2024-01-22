const express = require('express');
const router = express.Router();
const AdmissionController = require('../Controllers/AdmissionController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside Admission Router");
})

router.post('/admission', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AdmissionController.addAdmission)
router.get('/admission', AdmissionController.getAllAdmission)
router.get('/admission?:id', AdmissionController.getAdmissionById)
router.put('/admission?:id', AdmissionController.updateAdmission)
router.patch('/admission/:id/:status', AdmissionController.updateAdmissionStatus)
router.delete('/admission?:id', AdmissionController.deleteAdmissionById)

module.exports = router;  