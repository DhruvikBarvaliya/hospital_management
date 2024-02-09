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
 *           description: The Patient Id From Patient Table
 *         test_id:
 *           type: integer
 *           description: The Test Id From Test Table
 *         result_details:
 *           type: string
 *           description: Give Result Details for TestResult
 *         test_date:
 *           type: string
 *           format: date
 *           description: Enter Test Date for Test Result
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

router.post('/test-result',/* authorize(), */ TestResultController.addTestResult)
router.get('/test-result',/* authorize(), */ TestResultController.getAllTestResult)
router.get('/test-result/:id',/* authorize(), */ TestResultController.getTestResultById)
router.put('/test-result/:id',/* authorize(), */ TestResultController.updateTestResult)
router.patch('/test-result/:id/:status',/* authorize(), */ TestResultController.updateTestResultStatus)
router.delete('/test-result/:id',/* authorize(), */ TestResultController.deleteTestResultById)

module.exports = router;  