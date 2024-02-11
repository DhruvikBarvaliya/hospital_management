const express = require("express");
const router = express.Router();
const InventoryController = require("../Controllers/InventoryController");
const authorize = require('../Middleware/Auth');
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
 *         item_id:
 *           type: string
 *           description: Give Unique Item Id
 *         item_name:
 *           type: string
 *           description: Give Unique Item Name
 *         quantity_available:
 *           type: integer
 *           description: Give How many Quantity Available for Item
 *         unit_price:
 *           type: integer
 *           description: Give How many Price Available for Item
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

router.post("/inventory", /* authorize(), */ InventoryController.addInventory);
router.get(
  "/inventory",
  /* authorize(), */ InventoryController.getAllInventory
);
router.get(
  "/inventory/:id",
  /* authorize(), */ InventoryController.getInventoryById
);
router.put(
  "/inventory/:id",
  /* authorize(), */ InventoryController.updateInventory
);
router.patch(
  "/inventory/:id/:status",
  /* authorize(), */ InventoryController.updateInventoryStatus
);
router.delete(
  "/inventory/:id",
  /* authorize(), */ InventoryController.deleteInventoryById
);

module.exports = router;
