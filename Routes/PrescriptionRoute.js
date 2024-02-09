const express = require('express');
const router = express.Router();
const PrescriptionController = require('../Controllers/PrescriptionController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Prescription:
 *       type: object
 *       required:
 *         - patient_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The title of your Prescription
 *         medication_name:
 *           type: string
 *           description: The Prescription author
 *         prescription_date:
 *           type: string
 *           format: date
 *           description: Whether you have finished reading the Prescription
 *         prescription_cost:
 *           type: integer
 *           description: The date the Prescription was added
 *         doctor_id:
 *           type: integer
 *           description: The date the Prescription was added
 *         medication_id:
 *           type: integer
 *           description: The date the Prescription was added
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
 *   name: Prescription
 *   description: The prescription managing API
 * /prescription:
 *   get:
 *     summary: Lists all the prescription
 *     tags: [Prescription]
 *     responses:
 *       200:
 *         description: The list of the prescription
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Prescription'
 *   post:
 *     summary: Create a new Prescription
 *     tags: [Prescription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Prescription'
 *     responses:
 *       200:
 *         description: The created Prescription.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       500:
 *         description: Some server error
 * /prescription/{id}:
 *   get:
 *     summary: Get the Prescription by id
 *     tags: [Prescription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Prescription id
 *     responses:
 *       200:
 *         description: The Prescription response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription'
 *       404:
 *         description: The Prescription was not found
 *   put:
 *    summary: Update the Prescription by the id
 *    tags: [Prescription]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Prescription id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Prescription'
 *    responses:
 *      200:
 *        description: The Prescription was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Prescription'
 *      404:
 *        description: The Prescription was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Prescription by id
 *     tags: [Prescription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Prescription id
 *
 *     responses:
 *       200:
 *         description: The Prescription was deleted
 *       404:
 *         description: The Prescription was not found
 */

router.post('/prescription',/* authorize(), */  PrescriptionController.addPrescription)
router.get('/prescription',/* authorize(), */ PrescriptionController.getAllPrescription)
router.get('/prescription/:id',/* authorize(), */ PrescriptionController.getPrescriptionById)
router.put('/prescription/:id',/* authorize(), */ PrescriptionController.updatePrescription)
router.patch('/prescription/:id/:status',/* authorize(), */ PrescriptionController.updatePrescriptionStatus)
router.delete('/prescription/:id',/* authorize(), */ PrescriptionController.deletePrescriptionById)

module.exports = router;  