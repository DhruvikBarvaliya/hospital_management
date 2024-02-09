const express = require('express');
const router = express.Router();
const PharmacyController = require('../Controllers/PharmacyController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Pharmacy:
 *       type: object
 *       required:
 *         - pharmacy_name
 *       properties:
 *         pharmacy_name:
 *           type: string
 *           description: The title of your Pharmacy
 *         pharmacy_address:
 *           type: integer
 *           description: The Pharmacy author
 *         pharmacy_phone_number:
 *           type: string
 *           description: Whether you have finished reading the Pharmacy
 *         is_active:
 *           type: boolean
 *           description: This field is a boolean column in a database table that indicates whether a record or user is currently active or inactive
 *         status:
 *           type: boolean
 *           description: This field is used to indicate the current state of a record
 *         created_by:
 *           type: integer
 *           format: date
 *           description: This field typically stores the user responsible for creating a record in a database
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: This field is used to track the user that last updated a record in a database
 */

/**
 * @swagger
 * tags:
 *   name: Pharmacy
 *   description: The billings managing API
 * /billings:
 *   get:
 *     summary: Lists all the billings
 *     tags: [Pharmacy]
 *     responses:
 *       200:
 *         description: The list of the billings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pharmacy'
 *   post:
 *     summary: Create a new Pharmacy
 *     tags: [Pharmacy]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pharmacy'
 *     responses:
 *       200:
 *         description: The created Pharmacy.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pharmacy'
 *       500:
 *         description: Some server error
 * /billings/{id}:
 *   get:
 *     summary: Get the Pharmacy by id
 *     tags: [Pharmacy]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Pharmacy id
 *     responses:
 *       200:
 *         description: The Pharmacy response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pharmacy'
 *       404:
 *         description: The Pharmacy was not found
 *   put:
 *    summary: Update the Pharmacy by the id
 *    tags: [Pharmacy]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Pharmacy id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Pharmacy'
 *    responses:
 *      200:
 *        description: The Pharmacy was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Pharmacy'
 *      404:
 *        description: The Pharmacy was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Pharmacy by id
 *     tags: [Pharmacy]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Pharmacy id
 *
 *     responses:
 *       200:
 *         description: The Pharmacy was deleted
 *       404:
 *         description: The Pharmacy was not found
 */

router.post('/pharmacy',/* authorize(), */  PharmacyController.addPharmacy)
router.get('/pharmacy',/* authorize(), */ PharmacyController.getAllPharmacy)
router.get('/pharmacy/:id',/* authorize(), */ PharmacyController.getPharmacyById)
router.put('/pharmacy/:id',/* authorize(), */ PharmacyController.updatePharmacy)
router.patch('/pharmacy/:id/:status',/* authorize(), */ PharmacyController.updatePharmacyStatus)
router.delete('/pharmacy/:id',/* authorize(), */ PharmacyController.deletePharmacyById)

module.exports = router;  