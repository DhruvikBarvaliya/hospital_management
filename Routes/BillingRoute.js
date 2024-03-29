const express = require("express");
const router = express.Router();
const BillingController = require("../Controllers/BillingController");
const authorize = require('../Middleware/Auth');
const Role = require("../Helpers/Role");

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
 *           description: The Patient Id From Patient Table
 *         doctore_id:
 *           type: integer
 *           description: The Doctor Id From Doctor Table
 *         admission_id:
 *           type: integer
 *           description: The Admission Id From Admission Table
 *         bill_date:
 *           type: string
 *           format: date
 *           description: Give Bill Date When Bill is Generate for User
 *         total_amount:
 *           type: integer
 *           description: Give Total Amount When Bill is Generate for User
 *         payment_status:
 *           type: string
 *           description: Give Payment Status for Particular this bill for User
 *         is_active:
 *           type: boolean
 *           description: The date the Billing was added
 *         status:
 *           type: boolean
 *           description: The date the Billing was added
 *         created_by:
 *           type: integer
 *           description: The date the Billing was added
 *         updated_by:
 *           type: integer
 *           description: The date the Billing was added
 */

/**
 * @swagger
 * tags:
 *   name: Billing
 *   description: The billing managing API
 * /billing:
 *   get:
 *     summary: Lists all the billing
 *     tags: [Billing]
 *     responses:
 *       200:
 *         description: The list of the billing
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
 * /billing/{id}:
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

router.post("/billing", /* authorize(), */ BillingController.addBilling);
router.get("/billing", /* authorize(), */ BillingController.getAllBilling);
router.get("/billing/:id", /* authorize(), */ BillingController.getBillingById);
router.put("/billing/:id", /* authorize(), */ BillingController.updateBilling);
router.patch(
  "/billing/:id/:status",
  /* authorize(), */ BillingController.updateBillingStatus
);
router.delete(
  "/billing/:id",
  /* authorize(), */ BillingController.deleteBillingById
);

module.exports = router;
