const db = require('../Config/Sequelize')
const Admission = db.AdmissionModel

module.exports = {

    addAdmission: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Admission Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Admission.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Admission."
            });
        });
    },
    getAllAdmission: (req, res) => {
        Admission.findAll().then(result => {
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
    getAdmissionById: (req, res) => {
        let id = req.query.id
        Admission.findByPk(id).then(result => {
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
    updateAdmission: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Admission.update(data, {
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
    updateAdmissionStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Admission.update({ status: status }, {
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
    deleteAdmissionById: (req, res) => {
        let id = req.query.id
        Admission.destroy({ where: { id: id } }).then(result => {
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