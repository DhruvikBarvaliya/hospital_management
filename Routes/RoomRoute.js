const express = require('express');
const router = express.Router();
const RoomController = require('../Controllers/RoomController')
const authorize = require('../Middleware/auth');
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
 *           description: The title of your Room
 *         staff_id:
 *           type: integer
 *           description: The Room author
 *         admission_date:
 *           type: string
 *           format: date
 *           description: The date the Room was added
 *         is_active:
 *           type: boolean
 *           description: The date the Room was added
 *         status:
 *           type: boolean
 *           description: The date the Room was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Room was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Room was added
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

router.post('/room',  RoomController.addRoom)
router.get('/room', RoomController.getAllRoom)
router.get('/room?:id', RoomController.getRoomById)
router.put('/room?:id', RoomController.updateRoom)
router.patch('/room/:id/:status', RoomController.updateRoomStatus)
router.delete('/room?:id', RoomController.deleteRoomById)

module.exports = router;  