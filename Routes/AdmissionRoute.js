const express = require("express");
const router = express.Router();
const AdmissionController = require("../Controllers/AdmissionController");
const authorize = require("../Middleware/Auth");
const Role = require("../Helpers/Role");

/**
 * @swagger
 * components:
 *   schemas:
 *     Admission:
 *       type: object
 *       required:
 *         - patient_id
 *         - word_id
 *       properties:
 *         patient_id:
 *           type: integer
 *           description: The Patient Id From Patient Table
 *         word_id:
 *           type: integer
 *           description: The Word Id From Word Table
 *         admission_date:
 *           type: string
 *           format: date
 *           description: Give admission Date When Patient Admitted in Hospital
 *         discharge_date:
 *           type: string
 *           format: date
 *           description: Give discharge Date When Patient discharge from Hospital
 *         reason:
 *           type: string
 *           description: Give Reason Why Patient Admitted in Hospital
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
 *   name: Admission
 *   description: The admission managing API
 * /admission:
 *   get:
 *     summary: Lists all the admission
 *     tags: [Admission]
 *     responses:
 *       200:
 *         description: The list of the admission
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admission'
 *   post:
 *     summary: Create a new Admission
 *     tags: [Admission]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admission'
 *     responses:
 *       200:
 *         description: The created Admission.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admission'
 *       500:
 *         description: Some server error
 * /admission/{id}:
 *   get:
 *     summary: Get the Admission by id
 *     tags: [Admission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Admission id
 *     responses:
 *       200:
 *         description: The Admission response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admission'
 *       404:
 *         description: The Admission was not found
 *   put:
 *    summary: Update the Admission by the id
 *    tags: [Admission]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Admission id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admission'
 *    responses:
 *      200:
 *        description: The Admission was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admission'
 *      404:
 *        description: The Admission was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the Admission by id
 *     tags: [Admission]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Admission id
 *
 *     responses:
 *       200:
 *         description: The Admission was deleted
 *       404:
 *         description: The Admission was not found
 */

router.route("/admission")
  .post(/* authorize(), */ AdmissionController.addAdmission)
  .get(/* authorize(), */ AdmissionController.getAllAdmission);

router.route("/admission/:id")
  .get(/* authorize(), */ AdmissionController.getAdmissionById)
  .put(/* authorize(), */ AdmissionController.updateAdmission)
  .delete(/* authorize(), */ AdmissionController.deleteAdmissionById);
  // .patch(/* authorize(), */ AdmissionController.updateAdmissionStatus)

router.patch(
    "/admission/:id/:status",
    /* authorize(), */ AdmissionController.updateAdmissionStatus
  );  

module.exports = router;
