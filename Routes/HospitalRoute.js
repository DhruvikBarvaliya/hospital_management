const express = require("express");
const router = express.Router();
const HospitalController = require("../Controllers/HospitalController");
const authorize = require('../Middleware/Auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Hospital:
 *       type: object
 *       required:
 *         - hospital_name
 *       properties:
 *         hospital_name:
 *           type: string
 *           description: Give Hospital Name
 *         address:
 *           type: string
 *           description: Give Hospital Address
 *         hospital_phone_number:
 *           type: string
 *           description: Give Hospital Phone Number
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
 *   name: Hospital
 *   description: The hospital managing API
 * /hospital:
 *   get:
 *     summary: Lists all the hospital
 *     tags: [Hospital]
 *     responses:
 *       200:
 *         description: The list of the hospital
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hospital'
 *   post:
 *     summary: Create a new Hospital
 *     tags: [Hospital]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hospital'
 *     responses:
 *       200:
 *         description: The created Hospital.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hospital'
 *       500:
 *         description: Some server error
 * /hospital/{id}:
 *   get:
 *     summary: Get the Hospital by id
 *     tags: [Hospital]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Hospital id
 *     responses:
 *       200:
 *         description: The Hospital response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hospital'
 *       404:
 *         description: The Hospital was not found
 *   put:
 *    summary: Update the Hospital by the id
 *    tags: [Hospital]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Hospital id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Hospital'
 *    responses:
 *      200:
 *        description: The Hospital was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Hospital'
 *      404:
 *        description: The Hospital was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Hospital by id
 *     tags: [Hospital]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Hospital id
 *
 *     responses:
 *       200:
 *         description: The Hospital was deleted
 *       404:
 *         description: The Hospital was not found
 */

router.post("/hospital", /* authorize(), */ HospitalController.addHospital);
router.get("/hospital", /* authorize(), */ HospitalController.getAllHospital);
router.get(
  "/hospital/:id",
  /* authorize(), */ HospitalController.getHospitalById
);
router.put(
  "/hospital/:id",
  /* authorize(), */ HospitalController.updateHospital
);
router.patch(
  "/hospital/:id/:status",
  /* authorize(), */ HospitalController.updateHospitalStatus
);
router.delete(
  "/hospital/:id",
  /* authorize(), */ HospitalController.deleteHospitalById
);

module.exports = router;
