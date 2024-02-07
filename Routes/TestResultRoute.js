const express = require('express');
const router = express.Router();
const TestResultController = require('../Controllers/TestResultController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     TestResult:
 *       type: object
 *       required:
 *         - patient_id
 *         - test_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The title of your TestResult
 *         test_id:
 *           type: integer
 *           description: The TestResult author
 *         result_details:
 *           type: string
 *           description: Whether you have finished reading the TestResult
 *         test_date:
 *           type: string
 *           format: date
 *           description: The date the TestResult was added
 *         is_active:
 *           type: boolean
 *           description: The date the TestResult was added
 *         status:
 *           type: boolean
 *           description: The date the TestResult was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the TestResult was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the TestResult was added
 */

/**
 * @swagger
 * tags:
 *   name: TestResult
 *   description: The test-result managing API
 * /test-result:
 *   get:
 *     summary: Lists all the test-result
 *     tags: [TestResult]
 *     responses:
 *       200:
 *         description: The list of the test-result
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestResult'
 *   post:
 *     summary: Create a new TestResult
 *     tags: [TestResult]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestResult'
 *     responses:
 *       200:
 *         description: The created TestResult.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestResult'
 *       500:
 *         description: Some server error
 * /test-result/{id}:
 *   get:
 *     summary: Get the TestResult by id
 *     tags: [TestResult]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The TestResult id
 *     responses:
 *       200:
 *         description: The TestResult response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestResult'
 *       404:
 *         description: The TestResult was not found
 *   put:
 *    summary: Update the TestResult by the id
 *    tags: [TestResult]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The TestResult id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TestResult'
 *    responses:
 *      200:
 *        description: The TestResult was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TestResult'
 *      404:
 *        description: The TestResult was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the TestResult by id
 *     tags: [TestResult]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The TestResult id
 *
 *     responses:
 *       200:
 *         description: The TestResult was deleted
 *       404:
 *         description: The TestResult was not found
 */

router.post('/test-result', TestResultController.addTestResult)
router.get('/test-result', TestResultController.getAllTestResult)
router.get('/test-result?:id', TestResultController.getTestResultById)
router.put('/test-result?:id', TestResultController.updateTestResult)
router.patch('/test-result/:id/:status', TestResultController.updateTestResultStatus)
router.delete('/test-result?:id', TestResultController.deleteTestResultById)

module.exports = router;  