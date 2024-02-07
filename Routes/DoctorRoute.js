const express = require('express');
const router = express.Router();
const DoctorController = require('../Controllers/DoctorController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       required:
 *         - doctor_first_name
 *         - department_id
 *       properties:
 *         doctor_first_name:
 *           type: string
 *           description: The title of your Doctor
 *         doctore_last_name:
 *           type: string
 *           description: The Doctor author
 *         department_id:
 *           type: integer
 *           description: Whether you have finished reading the Doctor
 *         doctore_phone_number:
 *           type: string
 *           description: The date the Doctor was added
 *         specialization:
 *           type: string
 *           description: The date the Doctor was added
 *         email:
 *           type: string
 *           description: The date the Doctor was added
 *         doctor_address:
 *           type: integer
 *           description: Whether you have finished reading the Doctor
 *         salary:
 *           type: string
 *           description: The date the Doctor was added
 *         hospital_id:
 *           type: integer
 *           description: The date the Doctor was added
 *         qualification:
 *           type: string
 *           description: The date the Doctor was added
 *         is_active:
 *           type: boolean
 *           description: The date the Doctor was added
 *         status:
 *           type: boolean
 *           description: The date the Doctor was added
 *         created_by:
 *           type: integer
 *           description: The date the Doctor was added
 *         updated_by:
 *           type: integer
 *           description: The date the Doctor was added
 */

/**
 * @swagger
 * tags:
 *   name: Doctor
 *   description: The doctor managing API
 * /doctor:
 *   get:
 *     summary: Lists all the doctor
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: The list of the doctor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doctor'
 *   post:
 *     summary: Create a new Doctor
 *     tags: [Doctor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doctor'
 *     responses:
 *       200:
 *         description: The created Doctor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Some server error
 * /doctor/{id}:
 *   get:
 *     summary: Get the Doctor by id
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Doctor id
 *     responses:
 *       200:
 *         description: The Doctor response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       404:
 *         description: The Doctor was not found
 *   put:
 *    summary: Update the Doctor by the id
 *    tags: [Doctor]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Doctor id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Doctor'
 *    responses:
 *      200:
 *        description: The Doctor was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Doctor'
 *      404:
 *        description: The Doctor was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Doctor by id
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Doctor id
 *
 *     responses:
 *       200:
 *         description: The Doctor was deleted
 *       404:
 *         description: The Doctor was not found
 */

router.post('/doctor',  DoctorController.addDoctor)
router.get('/doctor', DoctorController.getAllDoctor)
router.get('/doctor/:id', DoctorController.getDoctorById)
router.put('/doctor/:id', DoctorController.updateDoctor)
router.patch('/doctor/:id/:status', DoctorController.updateDoctorStatus)
router.delete('/doctor/:id', DoctorController.deleteDoctorById)

module.exports = router;  