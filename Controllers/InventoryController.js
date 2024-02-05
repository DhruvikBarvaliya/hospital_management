const db = require('../Config/Sequelize')
const Inventory = db.InventoryModel

module.exports = {

    addInventory: (req, res) => {
        if (!req.body.item_name) {
            res.status(400).send({ message: "Item Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Inventory.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Inventory."
            });
        });
    },
    getAllInventory: (req, res) => {
        Inventory.findAll().then(result => {
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
    getInventoryById: (req, res) => {
        let id = req.query.id
        Inventory.findByPk(id).then(result => {
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
    updateInventory: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Inventory.update(data, {
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
    updateInventoryStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Inventory.update({ status: status }, {
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
    deleteInventoryById: (req, res) => {
        let id = req.query.id
        Inventory.destroy({ where: { id: id } }).then(result => {
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