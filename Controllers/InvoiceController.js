const db = require('../Config/Sequelize')
const Invoice = db.InvoiceModel

module.exports = {

    addInvoice: async (req, res) => {
        if (!req.body.patient_id) {
            res.status(400).send({ message: "Patient Id Can not be Emapty" })
            return;
        }
        const data = req.body;
        Invoice.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Invoice."
            });
        });
    },
    getAllInvoice: async (req, res) => {
        Invoice.findAll().then(result => {
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
    getInvoiceById: async (req, res) => {
        let id = req.params.id
        Invoice.findByPk(id).then(result => {
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
    updateInvoice: async (req, res) => {
        let id = req.params.id
        let data = req.body;
        Invoice.update(data, {
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
    updateInvoiceStatus: async (req, res) => {
        let id = req.params.id
        let status = req.params;
        Invoice.update({ status: status }, {
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
    deleteInvoiceById: async (req, res) => {
        let id = req.params.id
        Invoice.destroy({ where: { id: id } }).then(result => {
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