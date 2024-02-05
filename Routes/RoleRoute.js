const express = require('express');
const router = express.Router();
const RoleController = require('../Controllers/RoleController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - role_name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Role
 *         role_name:
 *           type: string
 *           description: The title of your Role
 *         is_active:
 *           type: string
 *           description: The date the Role was added
 *         status:
 *           type: string
 *           description: The date the Role was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Role was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Role was added
 *       example:
 *         role_name: "Admin"
 *         is_active: true
 *         status: true
 *         created_by: 5
 *         updated_by: 5
 */

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: The role managing API
 * /role:
 *   get:
 *     summary: Lists all the role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: The list of the role
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *   post:
 *     summary: Create a new Role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: The created Role.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       500:
 *         description: Some server error
 * /role/{id}:
 *   get:
 *     summary: Get the Role by id
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Role id
 *     responses:
 *       200:
 *         description: The Role response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: The Role was not found
 *   put:
 *    summary: Update the Role by the id
 *    tags: [Role]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Role id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Role'
 *    responses:
 *      200:
 *        description: The Role was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Role'
 *      404:
 *        description: The Role was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Role by id
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Role id
 *
 *     responses:
 *       200:
 *         description: The Role was deleted
 *       404:
 *         description: The Role was not found
 */

router.post('/role',  RoleController.addRole)
router.get('/role', RoleController.getAllRole)
router.get('/role?:id', RoleController.getRoleById)
router.put('/role?:id', RoleController.updateRole)
router.patch('/role/:id/:status', RoleController.updateRoleStatus)
router.delete('/role?:id', RoleController.deleteRoleById)

module.exports = router; 