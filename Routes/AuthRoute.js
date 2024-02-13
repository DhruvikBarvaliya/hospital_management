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
 * /register:
 *   post:
 *     summary: Register User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User Register Successfuly
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 * /login:
 *   post:
 *     summary: Login User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *              model:
 *                type: string
 *                default: Doctor
 *     responses:
 *       200:
 *         description: Login Successfuly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /logout:
 *   get:
 *     summary: Logout User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *     responses:
 *       200:
 *         description: Logout Successfuly.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /sendOtp:
 *   post:
 *     summary: Send OTP API
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - for_forgot
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              for_forgot:
 *                type: boolean
 *                default: true
 *     responses:
 *       200:
 *         description: OTP Sent Successfuly
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 * /verify:
 *   post:
 *     summary: Verifi OTP API
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              otp:
 *                type: integer
 *                default: 852
 *     responses:
 *       200:
 *         description: Verifi OTP Successfuly
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 * /changePassword:
 *   post:
 *     summary: Change Password API
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: Doctor
 *              newPassword:
 *                type: string
 *                default: Doctor
 *     responses:
 *       200:
 *         description: Password Successfuly Changed
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 * /forgotPassword:
 *   post:
 *     summary: Forgot Password API
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              otp:
 *                type: integer
 *                default: 753
 *              newPassword:
 *                type: string
 *                default: Doctor
 *     responses:
 *       200:
 *         description: The User response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The User was not found
 * /drop:
 *   delete:
 *     summary: Remove All Tables API
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

router.delete(
  "/drop/:drop",
  /* authorize(), */ AuthController.drop
);

module.exports = router;
