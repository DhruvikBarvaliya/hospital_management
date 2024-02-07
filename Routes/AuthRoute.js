const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/AuthController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Billing:
 *       type: object
 *       required:
 *         - patient_id
 *         - doctore_id
 *         - admission_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The title of your Billing
 *         doctore_id:
 *           type: integer
 *           description: The Billing author
 *         admission_id:
 *           type: integer
 *           description: Whether you have finished reading the Billing
 *         bill_date:
 *           type: string
 *           format: date
 *           description: The date the Billing was added
 *         total_amount:
 *           type: integer
 *           description: The date the Billing was added
 *         payment_status:
 *           type: string
 *           description: The date the Billing was added
 *         is_active:
 *           type: boolean
 *           description: The date the Billing was added
 *         status:
 *           type: boolean
 *           description: The date the Billing was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Billing was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Billing was added
 */

/**
 * @swagger
 * tags:
 *   name: Billing
 *   description: The billings managing API
 * /billings:
 *   get:
 *     summary: Lists all the billings
 *     tags: [Billing]
 *     responses:
 *       200:
 *         description: The list of the billings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Billing'
 *   post:
 *     summary: Create a new Billing
 *     tags: [Billing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Billing'
 *     responses:
 *       200:
 *         description: The created Billing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing'
 *       500:
 *         description: Some server error
 * /billings/{id}:
 *   get:
 *     summary: Get the Billing by id
 *     tags: [Billing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Billing id
 *     responses:
 *       200:
 *         description: The Billing response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing'
 *       404:
 *         description: The Billing was not found
 *   put:
 *    summary: Update the Billing by the id
 *    tags: [Billing]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Billing id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Billing'
 *    responses:
 *      200:
 *        description: The Billing was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Billing'
 *      404:
 *        description: The Billing was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Billing by id
 *     tags: [Billing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Billing id
 *
 *     responses:
 *       200:
 *         description: The Billing was deleted
 *       404:
 *         description: The Billing was not found
 */

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/sendOtp", AuthController.sendOtp);
router.post("/verify", AuthController.verify);
router.post("/changePassword", AuthController.changePassword);
router.post("/forgotPassword", AuthController.forgotPassword);

module.exports = router;