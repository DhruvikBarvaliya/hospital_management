const express = require("express");
const router = express.Router();
const RoomController = require("../Controllers/RoomController");
const authorize = require('../Middleware/Auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - patient_id
 *         - staff_id
 *         - admission_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The Patient Id From Patient Table
 *         staff_id:
 *           type: integer
 *           description: The Staff Id From Staff Table
 *         admission_date:
 *           type: string
 *           format: date
 *           description: Give Admission Date When Patient Admitted
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
 *   name: Room
 *   description: The room managing API
 * /room:
 *   get:
 *     summary: Lists all the room
 *     tags: [Room]
 *     responses:
 *       200:
 *         description: The list of the room
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 *   post:
 *     summary: Create a new Room
 *     tags: [Room]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 *     responses:
 *       200:
 *         description: The created Room.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       500:
 *         description: Some server error
 * /room/{id}:
 *   get:
 *     summary: Get the Room by id
 *     tags: [Room]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Room id
 *     responses:
 *       200:
 *         description: The Room response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: The Room was not found
 *   put:
 *    summary: Update the Room by the id
 *    tags: [Room]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Room id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Room'
 *    responses:
 *      200:
 *        description: The Room was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Room'
 *      404:
 *        description: The Room was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Room by id
 *     tags: [Room]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Room id
 *
 *     responses:
 *       200:
 *         description: The Room was deleted
 *       404:
 *         description: The Room was not found
 */

router.post("/room", /* authorize(), */ RoomController.addRoom);
router.get("/room", /* authorize(), */ RoomController.getAllRoom);
router.get("/room/:id", /* authorize(), */ RoomController.getRoomById);
router.put("/room/:id", /* authorize(), */ RoomController.updateRoom);
router.patch(
  "/room/:id/:status",
  /* authorize(), */ RoomController.updateRoomStatus
);
router.delete("/room/:id", /* authorize(), */ RoomController.deleteRoomById);

module.exports = router;
