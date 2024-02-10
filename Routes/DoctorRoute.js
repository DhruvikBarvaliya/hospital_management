const express = require("express");
const router = express.Router();
const DoctorController = require("../Controllers/DoctorController");
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

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
 *           description: Enter First Name of The Doctor
 *         doctore_last_name:
 *           type: string
 *           description: Enter Last Name of The Doctor
 *         department_id:
 *           type: integer
 *           description: Enter Department Id From where Doctor belongs to
 *         doctore_phone_number:
 *           type: string
 *           description: Enter Doctore Phone Number of Doctor
 *         specialization:
 *           type: string
 *           description: Enter Specialization of Doctor
 *         email:
 *           type: string
 *           description: Enter Email of Doctor
 *         password:
 *           type: string
 *           description: Enter Password for Doctor Login
 *         doctor_address:
 *           type: integer
 *           description: Enter Address for Doctor
 *         salary:
 *           type: integer
 *           description: Enter Salary for Doctor
 *         hospital_id:
 *           type: integer
 *           description: Give Hospital Id from Hospital Table
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: Enter Date Of Birth of The Doctor
 *         qualification:
 *           type: string
 *           description: Enter Qualification of Doctor
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

router.post("/doctor", /* authorize(), */ DoctorController.addDoctor);
router.get("/doctor", /* authorize(), */ DoctorController.getAllDoctor);
router.get("/doctor/:id", /* authorize(), */ DoctorController.getDoctorById);
router.put("/doctor/:id", /* authorize(), */ DoctorController.updateDoctor);
router.patch(
  "/doctor/:id/:status",
  /* authorize(), */ DoctorController.updateDoctorStatus
);
router.delete(
  "/doctor/:id",
  /* authorize(), */ DoctorController.deleteDoctorById
);

module.exports = router;
