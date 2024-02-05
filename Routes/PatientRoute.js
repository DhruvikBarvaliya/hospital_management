const express = require('express');
const router = express.Router();
const PatientController = require('../Controllers/PatientController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - patient_first_name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Patient
 *         patient_first_name:
 *           type: string
 *           description: The title of your Patient
 *         patient_last_name:
 *           type: string
 *           description: The Patient author
 *         patient_address:
 *           type: integer
 *           description: Whether you have finished reading the Patient
 *         patient_phone_number:
 *           type: string
 *           format: date
 *           description: The date the Patient was added
 *         pharmacy_id:
 *           type: integer
 *           description: The date the Patient was added
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: The date the Patient was added
 *         gender:
 *           type: string
 *           format: date
 *           description: The date the Patient was added
 *         hospital_id:
 *           type: integer
 *           description: The date the Patient was added
 *         email:
 *           type: string
 *           description: The date the Patient was added
 *         is_active:
 *           type: string
 *           description: The date the Patient was added
 *         status:
 *           type: string
 *           description: The date the Patient was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Patient was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Patient was added
 *       example:
 *         patient_first_name: "vikas"
 *         patient_last_name: "Dubay"
 *         patient_address: 5
 *         patient_phone_number: "9876543210"
 *         pharmacy_id: 1
 *         date_of_birth: "01-01-1994"
 *         gender: "Male"
 *         hospital_id: 2
 *         email: "vikas@gmail.com"
 *         is_active: true
 *         status: true
 *         created_by: 5
 *         updated_by: 5
 */

/**
 * @swagger
 * tags:
 *   name: Patient
 *   description: The patient managing API
 * /patient:
 *   get:
 *     summary: Lists all the patient
 *     tags: [Patient]
 *     responses:
 *       200:
 *         description: The list of the patient
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
 *   post:
 *     summary: Create a new Patient
 *     tags: [Patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: The created Patient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       500:
 *         description: Some server error
 * /patient/{id}:
 *   get:
 *     summary: Get the Patient by id
 *     tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Patient id
 *     responses:
 *       200:
 *         description: The Patient response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       404:
 *         description: The Patient was not found
 *   put:
 *    summary: Update the Patient by the id
 *    tags: [Patient]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Patient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Patient'
 *    responses:
 *      200:
 *        description: The Patient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Patient'
 *      404:
 *        description: The Patient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Patient by id
 *     tags: [Patient]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Patient id
 *
 *     responses:
 *       200:
 *         description: The Patient was deleted
 *       404:
 *         description: The Patient was not found
 */

router.post('/patient',  PatientController.addPatient)
router.get('/patient', PatientController.getAllPatient)
router.get('/patient?:id', PatientController.getPatientById)
router.put('/patient?:id', PatientController.updatePatient)
router.patch('/patient/:id/:status', PatientController.updatePatientStatus)
router.delete('/patient?:id', PatientController.deletePatientById)

module.exports = router;  