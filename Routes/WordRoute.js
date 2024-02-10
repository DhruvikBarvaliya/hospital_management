const express = require('express');
const router = express.Router();
const WordController = require('../Controllers/WordController')
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

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
 *           description: Enter Word Name
 *         capacity:
 *           type: integer
 *           description: Give Word Capacity
 *         departmnet_id:
 *           type: integer
 *           description: The Departmnet Id From Departmnet Table
 *         is_active:
 *           type: boolean
 *           description: This field is a boolean column in a database table that indicates whether a record or user is currently active or inactive
 *         status:
 *           type: boolean
 *           description: This field is used to indicate the current state of a record
 *         created_by:
 *           type: integer
 *           description: This field typically stores the user responsible for creating a record in a database
 *         updated_by:
 *           type: integer
 *           description: This field is used to track the user that last updated a record in a database
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

router.post('/word',/* authorize(), */  WordController.addWord)
router.get('/word',/* authorize(), */ WordController.getAllWord)
router.get('/word/:id',/* authorize(), */ WordController.getWordById)
router.put('/word/:id',/* authorize(), */ WordController.updateWord)
router.patch('/word/:id/:status',/* authorize(), */ WordController.updateWordStatus)
router.delete('/word/:id',/* authorize(), */ WordController.deleteWordById)

module.exports = router;  