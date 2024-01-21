const db = require('../Config/Sequelize')
const Role = db.RoleModel

module.exports = {

    addRole: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Role Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Role.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Role."
            });
        });
    },
    getAllRole: (req, res) => {
        Role.findAll().then(result => {
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
    getRoleById: (req, res) => {
        let id = req.query.id
        Role.findByPk(id).then(result => {
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
    updateRole: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Role.update(data, {
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
    updateRoleStatus: (req, res) => {
        let id = req.query.id
        let status = req.params;
        Role.update({ status: status }, {
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
    deleteRoleById: (req, res) => {
        let id = req.query.id
        Role.destroy({ where: { id: id } }).then(result => {
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