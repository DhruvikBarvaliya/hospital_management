const express = require("express");
const router = express.Router();
const AddressController = require("../Controllers/AddressController");
// const authorize = require('../Middleware/auth');
// const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - streetAddress1
 *       properties:
 *         streetAddress1:
 *           type: string
 *           description: Enter Your Street Address 1 Here
 *         streetAddress2:
 *           type: string
 *           description: Enter Your Street Address 2  Here
 *         country:
 *           type: string
 *           description: Give Your Country Name Here
 *         state:
 *           type: string
 *           description: Give Your State Name Here
 *         city:
 *           type: string
 *           description: Give Your City Name Here
 *         zip_code:
 *           type: integer
 *           description: Give Your Zip Code Here
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

router.post("/address", /* authorize(), */ AddressController.addAddress);
// router.post('/address', authorize([Role.ADMIN, Role.SUPER_ADMIN]), AddressController.addAddress)
router.get("/address", /* authorize(), */ AddressController.getAllAddress);
router.get("/address/:id", /* authorize(), */ AddressController.getAddressById);
router.put("/address/:id", /* authorize(), */ AddressController.updateAddress);
router.patch(
  "/address/:id/:status",
  /* authorize(), */ AddressController.updateAddressStatus
);
router.delete(
  "/address/:id",
  /* authorize(), */ AddressController.deleteAddressById
);

module.exports = router;
