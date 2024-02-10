const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/AuthController");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *       properties:
 *         role:
 *           type: string
 *           description: Enter Role Name of The User
 *         first_name:
 *           type: string
 *           description: Enter First Name of The User
 *         last_name:
 *           type: string
 *           description: Enter Last Name of The User
 *         phone_number:
 *           type: string
 *           description: Enter Phone Number of The User
 *         email:
 *           type: string
 *           description: Enter Email of The User
 *         password:
 *           type: string
 *           description: Enter Password of The User
 *         date_of_birth:
 *           type: string
 *           format: date
 *           description: Enter Date Of Birth of The User
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
 *   name: User
 *   description: The user managing API
 * /user:
 *   get:
 *     summary: Lists all the user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The list of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user/{id}:
 *   get:
 *     summary: Get the User by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The User response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 *   put:
 *    summary: Update the User by the id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the User by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */

router.post(
  "/register",
  /* authorize([Role.SUPER_ADMIN]), */ AuthController.register
);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);
router.post("/sendOtp", /* authorize(), */ AuthController.sendOtp);
router.post("/verify", /* authorize(), */ AuthController.verify);
router.post(
  "/changePassword",
  /* authorize(), */ AuthController.changePassword
);
router.post(
  "/forgotPassword",
  /* authorize(), */ AuthController.forgotPassword
);

module.exports = router;
