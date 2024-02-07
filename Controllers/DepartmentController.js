const db = require('../Config/Sequelize')
const Department = db.DepartmentModel

module.exports = {

    addDepartment: (req, res) => {
        if (!req.body.department_name) {
            res.status(400).send({ message: "Department Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Department.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Department."
            });
        });
    },
    getAllDepartment: (req, res) => {
        Department.findAll().then(result => {
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
    getDepartmentById: (req, res) => {
        let id = req.params.id
        Department.findByPk(id).then(result => {
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
    updateDepartment: (req, res) => {
        let id = req.params.id
        let data = req.body;
        Department.update(data, {
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
    updateDepartmentStatus: (req, res) => {
        let id = req.params.id
        let status = req.params;
        Department.update({ status: status }, {
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
    deleteDepartmentById: (req, res) => {
        let id = req.params.id
        Department.destroy({ where: { id: id } }).then(result => {
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