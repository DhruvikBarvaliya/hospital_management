const db = require('../Config/Sequelize')
const TestResult = db.TestResultModel

module.exports = {

    addTestResult: (req, res) => {
        if (!req.body.test_id) {
            res.status(400).send({ message: "Test Id Can not be Emapty" })
            return;
        }
        const data = req.body;
        TestResult.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the TestResult."
            });
        });
    },
    getAllTestResult: (req, res) => {
        TestResult.findAll().then(result => {
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
    getTestResultById: (req, res) => {
        let id = req.params.id
        TestResult.findByPk(id).then(result => {
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
    updateTestResult: (req, res) => {
        let id = req.params.id
        let data = req.body;
        TestResult.update(data, {
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
    updateTestResultStatus: (req, res) => {
        let id = req.params.id
        let status = req.params;
        TestResult.update({ status: status }, {
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
    deleteTestResultById: (req, res) => {
        let id = req.params.id
        TestResult.destroy({ where: { id: id } }).then(result => {
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