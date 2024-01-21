const express = require('express');
const router = express.Router();
const RoleController = require('../Controllers/RoleController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Role Router");
})

router.post('/role', authorize([Role.ADMIN, Role.SUPER_ADMIN]), RoleController.addRole)
router.get('/role', RoleController.getAllRole)
router.get('/role?:id', RoleController.getRoleById)
router.put('/role?:id', RoleController.updateRole)
router.patch('/role/:id/:status', RoleController.updateRoleStatus)
router.delete('/role?:id', RoleController.deleteRoleById)

module.exports = router; 