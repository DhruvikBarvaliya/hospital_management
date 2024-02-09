const express = require('express');
const router = express.Router();
const TestController = require('../Controllers/TestController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       required:
 *         - test_name
 *       properties:
 *         test_name:
 *           type: string
 *           description: The title of your Test
 *         description:
 *           type: string
 *           description: The Test author
 *         is_active:
 *           type: boolean
 *           description: The date the Test was added
 *         status:
 *           type: boolean
 *           description: The date the Test was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Test was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Test was added
 */

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: The test managing API
 * /test:
 *   get:
 *     summary: Lists all the test
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: The list of the test
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Test'
 *   post:
 *     summary: Create a new Test
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Test'
 *     responses:
 *       200:
 *         description: The created Test.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       500:
 *         description: Some server error
 * /test/{id}:
 *   get:
 *     summary: Get the Test by id
 *     tags: [Test]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Test id
 *     responses:
 *       200:
 *         description: The Test response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       404:
 *         description: The Test was not found
 *   put:
 *    summary: Update the Test by the id
 *    tags: [Test]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Test id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Test'
 *    responses:
 *      200:
 *        description: The Test was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Test'
 *      404:
 *        description: The Test was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Test by id
 *     tags: [Test]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Test id
 *
 *     responses:
 *       200:
 *         description: The Test was deleted
 *       404:
 *         description: The Test was not found
 */

router.post('/test',/* authorize(), */  TestController.addTest)
router.get('/test',/* authorize(), */ TestController.getAllTest)
router.get('/test/:id',/* authorize(), */ TestController.getTestById)
router.put('/test/:id',/* authorize(), */ TestController.updateTest)
router.patch('/test/:id/:status',/* authorize(), */ TestController.updateTestStatus)
router.delete('/test/:id',/* authorize(), */ TestController.deleteTestById)

module.exports = router;  