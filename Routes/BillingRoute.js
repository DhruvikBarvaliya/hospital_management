const express = require('express');
const router = express.Router();
const BillingController = require('../Controllers/BillingController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside Billing Router");
})

router.post('/billing', authorize([Role.ADMIN, Role.SUPER_ADMIN]), BillingController.addBilling)
router.get('/billing', BillingController.getAllBilling)
router.get('/billing?:id', BillingController.getBillingById)
router.put('/billing?:id', BillingController.updateBilling)
router.patch('/billing/:id/:status', BillingController.updateBillingStatus)
router.delete('/billing?:id', BillingController.deleteBillingById)

module.exports = router;  