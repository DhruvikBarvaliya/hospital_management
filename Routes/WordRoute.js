const express = require('express');
const router = express.Router();
const WordController = require('../Controllers/WordController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/role");

router.get('/', (req, res) => {
    res.send("Inside Word Router");
})

router.post('/word', authorize([Role.ADMIN, Role.SUPER_ADMIN]), WordController.addWord)
router.get('/word', WordController.getAllWord)
router.get('/word?:id', WordController.getWordById)
router.put('/word?:id', WordController.updateWord)
router.patch('/word/:id/:status', WordController.updateWordStatus)
router.delete('/word?:id', WordController.deleteWordById)

module.exports = router;  