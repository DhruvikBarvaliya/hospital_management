const express = require("express");
const router = express.Router();
const MedicalRecordController = require("../Controllers/MedicalRecordController");
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     MedicalRecord:
 *       type: object
 *       required:
 *         - patient_id
 *         - doctore_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The Patient Id From Patient Table
 *         doctore_id:
 *           type: integer
 *           description: The Doctore Id From Doctore Table
 *         record_date:
 *           type: string
 *           format: date
 *           description: Give Record Date Whene MedicalRecord Added
 *         diagnosis:
 *           type: string
 *           format: date
 *           description: Give diagnosis Description for MedicalRecord
 *         prescription:
 *           type: string
 *           description: Give Prescription for MedicalRecord
 *         test_result:
 *           type: integer
 *           description: Give Test Result Id From Test Result Table
 *         notes:
 *           type: string
 *           description: Give Notes for MedicalRecord
 *         problem:
 *           type: string
 *           description: Give Problem for MedicalRecord
 *         date_of_examination:
 *           type: string
 *           format: date
 *           description: Give Examination Date Whene MedicalRecord Added
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
 *   name: MedicalRecord
 *   description: The medical-record managing API
 * /medical-record:
 *   get:
 *     summary: Lists all the medical-record
 *     tags: [MedicalRecord]
 *     responses:
 *       200:
 *         description: The list of the medical-record
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MedicalRecord'
 *   post:
 *     summary: Create a new MedicalRecord
 *     tags: [MedicalRecord]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicalRecord'
 *     responses:
 *       200:
 *         description: The created MedicalRecord.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicalRecord'
 *       500:
 *         description: Some server error
 * /medical-record/{id}:
 *   get:
 *     summary: Get the MedicalRecord by id
 *     tags: [MedicalRecord]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MedicalRecord id
 *     responses:
 *       200:
 *         description: The MedicalRecord response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicalRecord'
 *       404:
 *         description: The MedicalRecord was not found
 *   put:
 *    summary: Update the MedicalRecord by the id
 *    tags: [MedicalRecord]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The MedicalRecord id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MedicalRecord'
 *    responses:
 *      200:
 *        description: The MedicalRecord was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MedicalRecord'
 *      404:
 *        description: The MedicalRecord was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the MedicalRecord by id
 *     tags: [MedicalRecord]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MedicalRecord id
 *
 *     responses:
 *       200:
 *         description: The MedicalRecord was deleted
 *       404:
 *         description: The MedicalRecord was not found
 */

router.post(
  "/medical-record",
  /* authorize(), */ MedicalRecordController.addMedicalRecord
);
router.get(
  "/medical-record",
  /* authorize(), */ MedicalRecordController.getAllMedicalRecord
);
router.get(
  "/medical-record/:id",
  /* authorize(), */ MedicalRecordController.getMedicalRecordById
);
router.put(
  "/medical-record/:id",
  /* authorize(), */ MedicalRecordController.updateMedicalRecord
);
router.patch(
  "/medical-record/:id/:status",
  /* authorize(), */ MedicalRecordController.updateMedicalRecordStatus
);
router.delete(
  "/medical-record/:id",
  /* authorize(), */ MedicalRecordController.deleteMedicalRecordById
);

module.exports = router;
