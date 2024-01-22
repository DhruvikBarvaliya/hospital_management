const db = require('../Config/Sequelize')
const Appointment = db.AppointmentModel

module.exports = {

    addAppointment: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Appointment Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Appointment.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Appointment."
            });
        });
    },
    getAllAppointment: (req, res) => {
        Appointment.findAll().then(result => {
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
    getAppointmentById: (req, res) => {
        let id = req.query.id
        Appointment.findByPk(id).then(result => {
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
    updateAppointment: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Appointment.update(data, {
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
    updateAppointmentStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Appointment.update({ status: status }, {
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
    deleteAppointmentById: (req, res) => {
        let id = req.query.id
        Appointment.destroy({ where: { id: id } }).then(result => {
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