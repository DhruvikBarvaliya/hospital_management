const express = require('express');
const router = express.Router();
const StaffController = require('../Controllers/StaffController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Staff:
 *       type: object
 *       required:
 *         - department_id
 *       properties:
 *         department_id:
 *           type: integer
 *           description: The title of your Staff
 *         staff_first_name:
 *           type: string
 *           description: The Staff author
 *         staff_last_name:
 *           type: string
 *           description: Whether you have finished reading the Staff
 *         staff_address:
 *           type: integer
 *           description: The date the Staff was added
 *         staff_phone_number:
 *           type: string
 *           description: The date the Staff was added
 *         email:
 *           type: string
 *           description: The date the Staff was added
 *         position:
 *           type: string
 *           description: The date the Staff was added
 *         role:
 *           type: integer
 *           description: The date the Staff was added
 *         is_active:
 *           type: boolean
 *           description: The date the Staff was added
 *         status:
 *           type: boolean
 *           description: The date the Staff was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Staff was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Staff was added
 */

/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: The staff managing API
 * /staff:
 *   get:
 *     summary: Lists all the staff
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: The list of the staff
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Staff'
 *   post:
 *     summary: Create a new Staff
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       200:
 *         description: The created Staff.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       500:
 *         description: Some server error
 * /staff/{id}:
 *   get:
 *     summary: Get the Staff by id
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Staff id
 *     responses:
 *       200:
 *         description: The Staff response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       404:
 *         description: The Staff was not found
 *   put:
 *    summary: Update the Staff by the id
 *    tags: [Staff]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Staff id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Staff'
 *    responses:
 *      200:
 *        description: The Staff was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Staff'
 *      404:
 *        description: The Staff was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Staff by id
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Staff id
 *
 *     responses:
 *       200:
 *         description: The Staff was deleted
 *       404:
 *         description: The Staff was not found
 */

router.post('/staff',  StaffController.addStaff)
router.get('/staff', StaffController.getAllStaff)
router.get('/staff?:id', StaffController.getStaffById)
router.put('/staff?:id', StaffController.updateStaff)
router.patch('/staff/:id/:status', StaffController.updateStaffStatus)
router.delete('/staff?:id', StaffController.deleteStaffById)

module.exports = router;  