const express = require('express');
const router = express.Router();
const TestController = require('../Controllers/TestController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Test Router");
})

router.post('/test', authorize([Role.ADMIN, Role.SUPER_ADMIN]), TestController.addTest)
router.get('/test', TestController.getAllTest)
router.get('/test?:id', TestController.getTestById)
router.put('/test?:id', TestController.updateTest)
router.patch('/test/:id/:status', TestController.updateTestStatus)
router.delete('/test?:id', TestController.deleteTestById)

module.exports = router;  