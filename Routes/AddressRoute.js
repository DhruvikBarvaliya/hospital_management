const express = require('express');
const router = express.Router();
const AddressController = require('../Controllers/AddressController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside Address Router");
})

router.post('/address', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AddressController.addAddress)
router.get('/address', AddressController.getAllAddress)
router.get('/address?:id', AddressController.getAddressById)
router.put('/address?:id', AddressController.updateAddress)
router.patch('/address/:id/:status', AddressController.updateAddressStatus)
router.delete('/address?:id', AddressController.deleteAddressById)

module.exports = router;  