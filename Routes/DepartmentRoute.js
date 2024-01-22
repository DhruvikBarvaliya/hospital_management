const express = require('express');
const router = express.Router();
const DepartmentController = require('../Controllers/DepartmentController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

router.get('/', (req, res) => {
    res.send("Inside Department Router");
})

router.post('/department', authorize([Role.ADMIN, Role.SUPER_ADMIN]), DepartmentController.addDepartment)
router.get('/department', DepartmentController.getAllDepartment)
router.get('/department?:id', DepartmentController.getDepartmentById)
router.put('/department?:id', DepartmentController.updateDepartment)
router.patch('/department/:id/:status', DepartmentController.updateDepartmentStatus)
router.delete('/department?:id', DepartmentController.deleteDepartmentById)

module.exports = router;  