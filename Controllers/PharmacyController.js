const db = require('../Config/Sequelize')
const Pharmacy = db.PharmacyModel

module.exports = {

    addPharmacy: (req, res) => {
        if (!req.body.pharmacy_name) {
            res.status(400).send({ message: "Pharmacy Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Pharmacy.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pharmacy."
            });
        });
    },
    getAllPharmacy: (req, res) => {
        Pharmacy.findAll().then(result => {
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
    getPharmacyById: (req, res) => {
        let id = req.params.id
        Pharmacy.findByPk(id).then(result => {
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
    updatePharmacy: (req, res) => {
        let id = req.params.id
        let data = req.body;
        Pharmacy.update(data, {
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
    updatePharmacyStatus: (req, res) => {
        let id = req.params.id
        let status = req.params;
        Pharmacy.update({ status: status }, {
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
    deletePharmacyById: (req, res) => {
        let id = req.params.id
        Pharmacy.destroy({ where: { id: id } }).then(result => {
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