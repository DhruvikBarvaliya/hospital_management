const Sequelize = require('sequelize');
const Database= require("../Config/Config");

const sequelize = new Sequelize(Database.DB, Database.USER, Database.PASSWORD, {
    host: Database.HOST,
    dialect: Database.dialect,
    operatorsAliases: 0,

    pool: {
        max: Database.pool.max,
        min: Database.pool.min,
        acquire: Database.pool.acquire,
        idle: Database.pool.idle
    },
    // logging: console.log,
    logging: logger.debug.bind(logger)
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.AddressModel = require("../Models/AddressModelModel")(sequelize, Sequelize);
db.AdmissionModel = require("../Models/AdmissionModelModel")(sequelize, Sequelize);
db.AppointmenModel = require("../Models/AppointmenModelModel")(sequelize, Sequelize);
db.BillingModel = require("../Models/BillingModel")(sequelize, Sequelize);
db.DepartmentModel = require("../Models/DepartmentModelModel")(sequelize, Sequelize);
db.DoctorModel = require("../Models/DoctorModelModel")(sequelize, Sequelize);
db.HospitalModel = require("../Models/HospitalModelModel")(sequelize, Sequelize);
db.InventoryModel = require("../Models/InventoryModelModel")(sequelize, Sequelize);
db.InvoiceModel = require("../Models/InvoiceModelModel")(sequelize, Sequelize);
db.MedicalModel = require("../Models/MedicalModelModel")(sequelize, Sequelize);
db.PatientModel = require("../Models/PatientModelModel")(sequelize, Sequelize);
db.PharmacyModel = require("../Models/PharmacyModelModel")(sequelize, Sequelize);
db.PrescriptionModel = require("../Models/PrescriptionModelModel")(sequelize, Sequelize);
db.RecordModel = require("../Models/RecordModelModel")(sequelize, Sequelize);
db.ResultModel = require("../Models/ResultModelModel")(sequelize, Sequelize);
db.RoleModel = require("../Models/RoleModelModel")(sequelize, Sequelize);
db.StaffModel = require("../Models/StaffModelModel")(sequelize, Sequelize);
db.TestModel = require("../Models/TestModelModel")(sequelize, Sequelize);
db.WordModel = require("../Models/WordModelModel")(sequelize, Sequelize);


module.exports = db;