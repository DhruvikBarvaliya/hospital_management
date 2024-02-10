const express = require('express');
const router = express.Router();
const InvoiceController = require('../Controllers/InvoiceController')
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Invoice:
 *       type: object
 *       required:
 *         - patient_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The Patient Id From Patient Table
 *         service_description:
 *           type: string
 *           description: Give Service Description for Invoice
 *         cost:
 *           type: integer
 *           description: Give Cost for particuler this for Invoice
 *         total:
 *           type: string
 *           description: Give total for particuler this for Invoice
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
 *   name: Invoice
 *   description: The invoice managing API
 * /invoice:
 *   get:
 *     summary: Lists all the invoice
 *     tags: [Invoice]
 *     responses:
 *       200:
 *         description: The list of the invoice
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Invoice'
 *   post:
 *     summary: Create a new Invoice
 *     tags: [Invoice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Invoice'
 *     responses:
 *       200:
 *         description: The created Invoice.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       500:
 *         description: Some server error
 * /invoice/{id}:
 *   get:
 *     summary: Get the Invoice by id
 *     tags: [Invoice]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Invoice id
 *     responses:
 *       200:
 *         description: The Invoice response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       404:
 *         description: The Invoice was not found
 *   put:
 *    summary: Update the Invoice by the id
 *    tags: [Invoice]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Invoice id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Invoice'
 *    responses:
 *      200:
 *        description: The Invoice was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Invoice'
 *      404:
 *        description: The Invoice was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Invoice by id
 *     tags: [Invoice]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Invoice id
 *
 *     responses:
 *       200:
 *         description: The Invoice was deleted
 *       404:
 *         description: The Invoice was not found
 */

router.post('/invoice',/* authorize(), */  InvoiceController.addInvoice)
router.get('/invoice',/* authorize(), */ InvoiceController.getAllInvoice)
router.get('/invoice/:id',/* authorize(), */ InvoiceController.getInvoiceById)
router.put('/invoice/:id',/* authorize(), */ InvoiceController.updateInvoice)
router.patch('/invoice/:id/:status',/* authorize(), */ InvoiceController.updateInvoiceStatus)
router.delete('/invoice/:id',/* authorize(), */ InvoiceController.deleteInvoiceById)

module.exports = router;  