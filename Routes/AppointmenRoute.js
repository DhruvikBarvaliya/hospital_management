const express = require('express');
const router = express.Router();
const AppointmentController = require('../Controllers/AppointmentController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Appointment:
 *       type: object
 *       required:
 *         - patient_id
 *         - doctore_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The title of your Appointment
 *         doctore_id:
 *           type: integer
 *           description: The Appointment author
 *         date:
 *           type: string
 *           format: date
 *           description: Whether you have finished reading the Appointment
 *         time:
 *           type: string
 *           format: date
 *           description: The date the Appointment was added
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
 *   name: Appointment
 *   description: The appointment managing API
 * /appointment:
 *   get:
 *     summary: Lists all the appointment
 *     tags: [Appointment]
 *     responses:
 *       200:
 *         description: The list of the appointment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *   post:
 *     summary: Create a new Appointment
 *     tags: [Appointment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       200:
 *         description: The created Appointment.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       500:
 *         description: Some server error
 * /appointment/{id}:
 *   get:
 *     summary: Get the Appointment by id
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Appointment id
 *     responses:
 *       200:
 *         description: The Appointment response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       404:
 *         description: The Appointment was not found
 *   put:
 *    summary: Update the Appointment by the id
 *    tags: [Appointment]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Appointment id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Appointment'
 *    responses:
 *      200:
 *        description: The Appointment was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Appointment'
 *      404:
 *        description: The Appointment was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Appointment by id
 *     tags: [Appointment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Appointment id
 *
 *     responses:
 *       200:
 *         description: The Appointment was deleted
 *       404:
 *         description: The Appointment was not found
 */

router.post('/appointment',/* authorize(), */  AppointmentController.addAppointment)
router.get('/appointment',/* authorize(), */ AppointmentController.getAllAppointment)
router.get('/appointment/:id',/* authorize(), */ AppointmentController.getAppointmentById)
router.put('/appointment/:id',/* authorize(), */ AppointmentController.updateAppointment)
router.patch('/appointment/:id/:status',/* authorize(), */ AppointmentController.updateAppointmentStatus)
router.delete('/appointment/:id',/* authorize(), */ AppointmentController.deleteAppointmentById)

module.exports = router;  