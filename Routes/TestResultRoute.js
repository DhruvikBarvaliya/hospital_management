const express = require('express');
const router = express.Router();
const TestResultController = require('../Controllers/TestResultController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside TestResult Router");
})

router.post('/test-result', authorize([Role.ADMIN, Role.SUPER_ADMIN]), TestResultController.addTestResult)
router.get('/test-result', TestResultController.getAllTestResult)
router.get('/test-result?:id', TestResultController.getTestResultById)
router.put('/test-result?:id', TestResultController.updateTestResult)
router.patch('/test-result/:id/:status', TestResultController.updateTestResultStatus)
router.delete('/test-result?:id', TestResultController.deleteTestResultById)

module.exports = router;  