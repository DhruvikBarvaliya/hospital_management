const express = require('express');
const router = express.Router();
const WordController = require('../Controllers/WordController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Word:
 *       type: object
 *       required:
 *         - word_name
 *       properties:
 *         word_name:
 *           type: string
 *           description: The title of your Word
 *         capacity:
 *           type: integer
 *           description: The Word author
 *         departmnet_id:
 *           type: integer
 *           description: Whether you have finished reading the Word
 *         is_active:
 *           type: boolean
 *           description: The date the Word was added
 *         status:
 *           type: boolean
 *           description: The date the Word was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Word was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Word was added
 */

/**
 * @swagger
 * tags:
 *   name: Word
 *   description: The word managing API
 * /word:
 *   get:
 *     summary: Lists all the word
 *     tags: [Word]
 *     responses:
 *       200:
 *         description: The list of the word
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Word'
 *   post:
 *     summary: Create a new Word
 *     tags: [Word]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Word'
 *     responses:
 *       200:
 *         description: The created Word.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Word'
 *       500:
 *         description: Some server error
 * /word/{id}:
 *   get:
 *     summary: Get the Word by id
 *     tags: [Word]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Word id
 *     responses:
 *       200:
 *         description: The Word response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Word'
 *       404:
 *         description: The Word was not found
 *   put:
 *    summary: Update the Word by the id
 *    tags: [Word]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Word id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Word'
 *    responses:
 *      200:
 *        description: The Word was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Word'
 *      404:
 *        description: The Word was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Word by id
 *     tags: [Word]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Word id
 *
 *     responses:
 *       200:
 *         description: The Word was deleted
 *       404:
 *         description: The Word was not found
 */

router.post('/word',  WordController.addWord)
router.get('/word', WordController.getAllWord)
router.get('/word/:id', WordController.getWordById)
router.put('/word/:id', WordController.updateWord)
router.patch('/word/:id/:status', WordController.updateWordStatus)
router.delete('/word/:id', WordController.deleteWordById)

module.exports = router;  