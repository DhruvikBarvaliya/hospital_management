const express = require('express');
const router = express.Router();
const InvoiceController = require('../Controllers/InvoiceController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Invoice Router");
})

router.post('/invoice', authorize([Role.ADMIN, Role.SUPER_ADMIN]), InvoiceController.addInvoice)
router.get('/invoice', InvoiceController.getAllInvoice)
router.get('/invoice?:id', InvoiceController.getInvoiceById)
router.put('/invoice?:id', InvoiceController.updateInvoice)
router.patch('/invoice/:id/:status', InvoiceController.updateInvoiceStatus)
router.delete('/invoice?:id', InvoiceController.deleteInvoiceById)

module.exports = router;  