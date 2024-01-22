const db = require('../Config/Sequelize')
const MedicalRecord = db.MedicalRecordRecordModel

module.exports = {

    addMedicalRecord: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "MedicalRecord Name Can not be Emapty" })
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
    getAllMedicalRecord: (req, res) => {
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
    getMedicalRecordById: (req, res) => {
        let id = req.query.id
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
    updateMedicalRecord: (req, res) => {
        let id = req.query.id
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
    updateMedicalRecordStatus: (req, res) => {
        let id = req.query.id
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
    deleteMedicalRecordById: (req, res) => {
        let id = req.query.id
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