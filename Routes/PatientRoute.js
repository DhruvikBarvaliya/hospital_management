const express = require('express');
const router = express.Router();
const PatientController = require('../Controllers/PatientController')
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - patient_first_name
 *       properties:
 *         patient_first_name:
 *           type: string
 *           description: Enter First Name of The Patient
 *         patient_last_name:
 *           type: string
 *           description: Enter Last Name of The Patient
 *         patient_address:
 *           type: integer
 *           description: Enter Address of The Patient
 *         patient_phone_number:
 *           type: string
 *           description: Enter Patient Phone Number of The Patient
 *         pharmacy_id:
 *           type: integer
 *           description: Give Pharmacy Id From Pharmacy Table
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: Enter Date Of Birth of The Patient
 *         gender:
 *           type: string
 *           format: date
 *           description: Enter Patient Gender
 *         hospital_id:
 *           type: integer
 *           description: Give Hospital Id From Hospital Table
 *         email:
 *           type: string
 *           description: Enter Email of The Patient
 *         password:
 *           type: string
 *           description: Enter Password of The Patient
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

router.post('/patient',/* authorize(), */  PatientController.addPatient)
router.get('/patient',/* authorize(), */ PatientController.getAllPatient)
router.get('/patient/:id',/* authorize(), */ PatientController.getPatientById)
router.put('/patient/:id',/* authorize(), */ PatientController.updatePatient)
router.patch('/patient/:id/:status',/* authorize(), */ PatientController.updatePatientStatus)
router.delete('/patient/:id',/* authorize(), */ PatientController.deletePatientById)

module.exports = router;  