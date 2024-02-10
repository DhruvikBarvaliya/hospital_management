const express = require("express");
const router = express.Router();
const DepartmentController = require("../Controllers/DepartmentController");
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       required:
 *         - department_name
 *       properties:
 *         department_name:
 *           type: string
 *           description: Enter Department Name
 *         hospital_id:
 *           type: integer
 *           description: Give Hospital Id from Hospital Table
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
 *   name: Department
 *   description: The department managing API
 * /department:
 *   get:
 *     summary: Lists all the department
 *     tags: [Department]
 *     responses:
 *       200:
 *         description: The list of the department
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Department'
 *   post:
 *     summary: Create a new Department
 *     tags: [Department]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: The created Department.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       500:
 *         description: Some server error
 * /department/{id}:
 *   get:
 *     summary: Get the Department by id
 *     tags: [Department]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Department id
 *     responses:
 *       200:
 *         description: The Department response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       404:
 *         description: The Department was not found
 *   put:
 *    summary: Update the Department by the id
 *    tags: [Department]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Department id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Department'
 *    responses:
 *      200:
 *        description: The Department was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Department'
 *      404:
 *        description: The Department was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Department by id
 *     tags: [Department]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Department id
 *
 *     responses:
 *       200:
 *         description: The Department was deleted
 *       404:
 *         description: The Department was not found
 */

router.post(
  "/department",
  /* authorize(), */ DepartmentController.addDepartment
);
router.get(
  "/department",
  /* authorize(), */ DepartmentController.getAllDepartment
);
router.get(
  "/department/:id",
  /* authorize(), */ DepartmentController.getDepartmentById
);
router.put(
  "/department/:id",
  /* authorize(), */ DepartmentController.updateDepartment
);
router.patch(
  "/department/:id/:status",
  /* authorize(), */ DepartmentController.updateDepartmentStatus
);
router.delete(
  "/department/:id",
  /* authorize(), */ DepartmentController.deleteDepartmentById
);

module.exports = router;
