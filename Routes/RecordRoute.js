const express = require('express');
const router = express.Router();
const RecordController = require('../Controllers/RecordController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Record Router");
})

router.post('/record', authorize([Role.ADMIN, Role.SUPER_ADMIN]), RecordController.addRecord)
router.get('/record', RecordController.getAllRecord)
router.get('/record?:id', RecordController.getRecordById)
router.put('/record?:id', RecordController.updateRecord)
router.patch('/record/:id/:status', RecordController.updateRecordStatus)
router.delete('/record?:id', RecordController.deleteRecordById)

module.exports = router;  