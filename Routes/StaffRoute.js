const express = require('express');
const router = express.Router();
const StaffController = require('../Controllers/StaffController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Staff Router");
})

router.post('/staff', authorize([Role.ADMIN, Role.SUPER_ADMIN]), StaffController.addStaff)
router.get('/staff', StaffController.getAllStaff)
router.get('/staff?:id', StaffController.getStaffById)
router.put('/staff?:id', StaffController.updateStaff)
router.patch('/staff/:id/:status', StaffController.updateStaffStatus)
router.delete('/staff?:id', StaffController.deleteStaffById)

module.exports = router;  