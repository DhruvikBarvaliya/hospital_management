const express = require('express');
const router = express.Router();
const InventoryController = require('../Controllers/InventoryController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Inventory Router");
})

router.post('/inventory', authorize([Role.ADMIN, Role.SUPER_ADMIN]), InventoryController.addInventory)
router.get('/inventory', InventoryController.getAllInventory)
router.get('/inventory?:id', InventoryController.getInventoryById)
router.put('/inventory?:id', InventoryController.updateInventory)
router.patch('/inventory/:id/:status', InventoryController.updateInventoryStatus)
router.delete('/inventory?:id', InventoryController.deleteInventoryById)

module.exports = router;  