const express = require('express');
const router = express.Router();
const HospitalController = require('../Controllers/HospitalController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Hospital Router");
})

router.post('/hospital', authorize([Role.ADMIN, Role.SUPER_ADMIN]), HospitalController.addHospital)
router.get('/hospital', HospitalController.getAllHospital)
router.get('/hospital?:id', HospitalController.getHospitalById)
router.put('/hospital?:id', HospitalController.updateHospital)
router.patch('/hospital/:id/:status', HospitalController.updateHospitalStatus)
router.delete('/hospital?:id', HospitalController.deleteHospitalById)

module.exports = router;  