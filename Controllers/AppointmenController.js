const db = require('../Config/Sequelize')
const Appointmen = db.AppointmenModel

module.exports = {

    addAppointmen: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Appointmen Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Appointmen.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Appointmen."
            });
        });
    },
    getAllAppointmen: (req, res) => {
        Appointmen.findAll().then(result => {
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
    getAppointmenById: (req, res) => {
        let id = req.query.id
        Appointmen.findByPk(id).then(result => {
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
    updateAppointmen: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Appointmen.update(data, {
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
    updateAppointmenStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Appointmen.update({ status: status }, {
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
    deleteAppointmenById: (req, res) => {
        let id = req.query.id
        Appointmen.destroy({ where: { id: id } }).then(result => {
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