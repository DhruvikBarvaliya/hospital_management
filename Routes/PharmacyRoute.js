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
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Pharmacy
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
 *           type: string
 *           description: The date the Pharmacy was added
 *         status:
 *           type: string
 *           description: The date the Pharmacy was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Pharmacy was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Pharmacy was added
 *       example:
 *         pharmacy_name: "Apollo Pharmacy"
 *         pharmacy_address: 5
 *         pharmacy_phone_number: "7894561230"
 *         is_active: true
 *         status: true
 *         created_by: 5
 *         updated_by: 5
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

router.post('/pharmacy',  PharmacyController.addPharmacy)
router.get('/pharmacy', PharmacyController.getAllPharmacy)
router.get('/pharmacy?:id', PharmacyController.getPharmacyById)
router.put('/pharmacy?:id', PharmacyController.updatePharmacy)
router.patch('/pharmacy/:id/:status', PharmacyController.updatePharmacyStatus)
router.delete('/pharmacy?:id', PharmacyController.deletePharmacyById)

module.exports = router;  