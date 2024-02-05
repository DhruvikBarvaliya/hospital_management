const db = require('../Config/Sequelize')
const Hospital = db.HospitalModel

module.exports = {

    addHospital: (req, res) => {
        if (!req.body.hospital_name) {
            res.status(400).send({ message: "Hospital Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Hospital.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Hospital."
            });
        });
    },
    getAllHospital: (req, res) => {
        Hospital.findAll().then(result => {
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
    getHospitalById: (req, res) => {
        let id = req.query.id
        Hospital.findByPk(id).then(result => {
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
    updateHospital: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Hospital.update(data, {
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
    updateHospitalStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Hospital.update({ status: status }, {
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
    deleteHospitalById: (req, res) => {
        let id = req.query.id
        Hospital.destroy({ where: { id: id } }).then(result => {
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