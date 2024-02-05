const express = require('express');
const router = express.Router();
const AddressController = require('../Controllers/AddressController')
const authorize = require('../Middleware/auth');
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - streetAddress1
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Address
 *         streetAddress1:
 *           type: string
 *           description: The title of your Address
 *         streetAddress2:
 *           type: string
 *           description: The Address author
 *         country:
 *           type: string
 *           description: Whether you have finished reading the Address
 *         state:
 *           type: string
 *           description: The date the Address was added
 *         city:
 *           type: string
 *           description: The date the Address was added
 *         zip_code:
 *           type: integer
 *           description: The date the Address was added
 *         is_active:
 *           type: string
 *           description: The date the Address was added
 *         status:
 *           type: string
 *           description: The date the Address was added
 *         created_by:
 *           type: integer
 *           format: date
 *           description: The date the Address was added
 *         updated_by:
 *           type: integer
 *           format: date
 *           description: The date the Address was added
 *       example:
 *         streetAddress1: "Bapa Sitarm Row House",
 *         streetAddress2: "Near Yogi Choke",
 *         country: "India",
 *         state: "Gujarat",
 *         city: "Surat",
 *         zip_code: 395006,
 *         is_active: true,
 *         status: true
 *         created_by: 5
 *         updated_by: 5
 */

/**
 * @swagger
 * tags:
 *   name: Address
 *   description: The address managing API
 * /address:
 *   get:
 *     summary: Lists all the address
 *     tags: [Address]
 *     responses:
 *       200:
 *         description: The list of the address
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 *   post:
 *     summary: Create a new Address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: The created Address.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       500:
 *         description: Some server error
 * /address/{id}:
 *   get:
 *     summary: Get the Address by id
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Address id
 *     responses:
 *       200:
 *         description: The Address response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: The Address was not found
 *   put:
 *    summary: Update the Address by the id
 *    tags: [Address]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Address id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Address'
 *    responses:
 *      200:
 *        description: The Address was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Address'
 *      404:
 *        description: The Address was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Address by id
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Address id
 *
 *     responses:
 *       200:
 *         description: The Address was deleted
 *       404:
 *         description: The Address was not found
 */

router.post('/address', AddressController.addAddress)
// router.post('/address', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AddressController.addAddress)
router.get('/address', AddressController.getAllAddress)
router.get('/address?:id', AddressController.getAddressById)
router.put('/address?:id', AddressController.updateAddress)
router.patch('/address/:id/:status', AddressController.updateAddressStatus)
router.delete('/address/:id', AddressController.deleteAddressById)

module.exports = router;  