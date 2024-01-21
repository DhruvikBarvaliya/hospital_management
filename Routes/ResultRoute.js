const express = require('express');
const router = express.Router();
const ResultController = require('../Controllers/ResultController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Result Router");
})

router.post('/result', authorize([Role.ADMIN, Role.SUPER_ADMIN]), ResultController.addResult)
router.get('/result', ResultController.getAllResult)
router.get('/result?:id', ResultController.getResultById)
router.put('/result?:id', ResultController.updateResult)
router.patch('/result/:id/:status', ResultController.updateResultStatus)
router.delete('/result?:id', ResultController.deleteResultById)

module.exports = router;  