const express = require('express');
const router = express.Router();
const HospitalController = require('../Controllers/HospitalController')
const authorize = require('../Middleware/auth');
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
 *           description: The title of your Hospital
 *         hospital_address:
 *           type: integer
 *           description: The Hospital author
 *         hospital_phone_number:
 *           type: string
 *           description: Whether you have finished reading the Hospital
 *         is_active:
 *           type: boolean
 *           description: The date the Hospital was added
 *         status:
 *           type: boolean
 *           description: The date the Hospital was added
 *         created_by:
 *           type: integer
 *           description: The date the Hospital was added
 *         updated_by:
 *           type: integer
 *           description: The date the Hospital was added
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

router.post('/hospital',  HospitalController.addHospital)
router.get('/hospital', HospitalController.getAllHospital)
router.get('/hospital?:id', HospitalController.getHospitalById)
router.put('/hospital?:id', HospitalController.updateHospital)
router.patch('/hospital/:id/:status', HospitalController.updateHospitalStatus)
router.delete('/hospital?:id', HospitalController.deleteHospitalById)

module.exports = router;  