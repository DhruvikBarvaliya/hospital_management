const express = require('express');
const router = express.Router();
const InventoryController = require('../Controllers/InventoryController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       required:
 *         - item_id
 *         - doctore_id
 *         - admission_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Inventory
 *         item_id:
 *           type: string
 *           description: The title of your Inventory
 *         item_name:
 *           type: string
 *           description: The Inventory author
 *         quantity_available:
 *           type: integer
 *           description: Whether you have finished reading the Inventory
 *         unit_price:
 *           type: integer
 *           description: The date the Inventory was added
 *         is_active:
 *           type: string
 *           description: The date the Inventory was added
 *         status:
 *           type: string
 *           description: The date the Inventory was added
 *         created_by:
 *           type: integer
 *           description: The date the Inventory was added
 *         updated_by:
 *           type: integer
 *           description: The date the Inventory was added
 *       example:
 *         item_id: "Para01",
 *         item_name: "Paracetamol",
 *         quantity_available: 100,
 *         unit_price: 10,
 *         is_active: true
 *         status: true
 *         created_by: 5
 *         updated_by: 5
 */

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: The inventory managing API
 * /inventory:
 *   get:
 *     summary: Lists all the inventory
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: The list of the inventory
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 *   post:
 *     summary: Create a new Inventory
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       200:
 *         description: The created Inventory.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Some server error
 * /inventory/{id}:
 *   get:
 *     summary: Get the Inventory by id
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Inventory id
 *     responses:
 *       200:
 *         description: The Inventory response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       404:
 *         description: The Inventory was not found
 *   put:
 *    summary: Update the Inventory by the id
 *    tags: [Inventory]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Inventory id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Inventory'
 *    responses:
 *      200:
 *        description: The Inventory was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Inventory'
 *      404:
 *        description: The Inventory was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Inventory by id
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Inventory id
 *
 *     responses:
 *       200:
 *         description: The Inventory was deleted
 *       404:
 *         description: The Inventory was not found
 */

router.post('/inventory', InventoryController.addInventory)
router.get('/inventory', InventoryController.getAllInventory)
router.get('/inventory?:id', InventoryController.getInventoryById)
router.put('/inventory?:id', InventoryController.updateInventory)
router.patch('/inventory/:id/:status', InventoryController.updateInventoryStatus)
router.delete('/inventory?:id', InventoryController.deleteInventoryById)

module.exports = router;  