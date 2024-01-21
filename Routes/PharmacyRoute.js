const express = require('express');
const router = express.Router();
const PharmacyController = require('../Controllers/PharmacyController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Pharmacy Router");
})

router.post('/pharmacy', authorize([Role.ADMIN, Role.SUPER_ADMIN]), PharmacyController.addPharmacy)
router.get('/pharmacy', PharmacyController.getAllPharmacy)
router.get('/pharmacy?:id', PharmacyController.getPharmacyById)
router.put('/pharmacy?:id', PharmacyController.updatePharmacy)
router.patch('/pharmacy/:id/:status', PharmacyController.updatePharmacyStatus)
router.delete('/pharmacy?:id', PharmacyController.deletePharmacyById)

module.exports = router;  