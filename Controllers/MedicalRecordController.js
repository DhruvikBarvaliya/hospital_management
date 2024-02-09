const db = require('../Config/Sequelize')
const MedicalRecord = db.MedicalRecordModel

module.exports = {

    addMedicalRecord: async (req, res) => {
        if (!req.body.patient_id) {
            res.status(400).send({ message: "Patient Id Can not be Emapty" })
            return;
        }
        const data = req.body;
        MedicalRecord.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MedicalRecord."
            });
        });
    },
    getAllMedicalRecord: async (req, res) => {
        MedicalRecord.findAll().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Recived"
                })
            }
        })
    },
    getMedicalRecordById: async (req, res) => {
        let id = req.params.id
        MedicalRecord.findByPk(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Recived"
                })
            }
        })
    },
    updateMedicalRecord: async (req, res) => {
        let id = req.params.id
        let data = req.body;
        MedicalRecord.update(data, {
            where: { id: id }
        }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Updated",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Updated"
                })
            }
        })
    },
    updateMedicalRecordStatus: async (req, res) => {
        let id = req.params.id
        let status = req.params;
        MedicalRecord.update({ status: status }, {
            where: { id: id }
        }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Updated",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Updated"
                })
            }
        })
    },
    deleteMedicalRecordById: async (req, res) => {
        let id = req.params.id
        MedicalRecord.destroy({ where: { id: id } }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Deleted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Deleted"
                })
            }
        })
    }
}