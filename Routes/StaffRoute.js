const express = require("express");
const router = express.Router();
const StaffController = require("../Controllers/StaffController");
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

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
 *           description: The Department Id From Department Table
 *         staff_first_name:
 *           type: string
 *           description: Enter First Name of The Staff
 *         staff_last_name:
 *           type: string
 *           description: Enter First Last of The Staff
 *         staff_address:
 *           type: integer
 *           description: Enter Address of The Staff
 *         staff_phone_number:
 *           type: string
 *           description: Enter Phone Number of The Staff
 *         email:
 *           type: string
 *           description: Enter Email of The Staff
 *         password:
 *           type: string
 *           description: Enter Password of The Staff
 *         position:
 *           type: string
 *           description: Enter Position of The Staff
 *         role:
 *           type: integer
 *           description: Enter Role of The Staff
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: Enter Date Of Birth of The Staff
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

router.post("/staff", /* authorize(), */ StaffController.addStaff);
router.get("/staff", /* authorize(), */ StaffController.getAllStaff);
router.get("/staff/:id", /* authorize(), */ StaffController.getStaffById);
router.put("/staff/:id", /* authorize(), */ StaffController.updateStaff);
router.patch(
  "/staff/:id/:status",
  /* authorize(), */ StaffController.updateStaffStatus
);
router.delete("/staff/:id", /* authorize(), */ StaffController.deleteStaffById);

module.exports = router;
