const Sequelize = require('sequelize');
const Database = require("../Config/Config");

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
    logging: console.log,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.AddressModel = require("../Models/AddressModel")(sequelize, Sequelize);
db.AdmissionModel = require("../Models/AdmissionModel")(sequelize, Sequelize);
db.AppointmentModel = require("../Models/AppointmenModel")(sequelize, Sequelize);
db.BillingModel = require("../Models/BillingModel")(sequelize, Sequelize);
db.DepartmentModel = require("../Models/DepartmentModel")(sequelize, Sequelize);
db.DoctorModel = require("../Models/DoctorModel")(sequelize, Sequelize);
db.HospitalModel = require("../Models/HospitalModel")(sequelize, Sequelize);
db.InventoryModel = require("../Models/InventoryModel")(sequelize, Sequelize);
db.InvoiceModel = require("../Models/InvoiceModel")(sequelize, Sequelize);
db.MedicalRecordModel = require("../Models/MedicalRecordModel")(sequelize, Sequelize);
db.PatientModel = require("../Models/PatientModel")(sequelize, Sequelize);
db.PharmacyModel = require("../Models/PharmacyModel")(sequelize, Sequelize);
db.PrescriptionModel = require("../Models/PrescriptionModel")(sequelize, Sequelize);
db.TestResultModel = require("../Models/TestResultModel")(sequelize, Sequelize);
db.RoleModel = require("../Models/RoleModel")(sequelize, Sequelize);
db.StaffModel = require("../Models/StaffModel")(sequelize, Sequelize);
db.TestModel = require("../Models/TestModel")(sequelize, Sequelize);
db.WordModel = require("../Models/WordModel")(sequelize, Sequelize);


db.DoctorModel.hasOne(db.AddressModel, { foreignKey: 'id' });
// Foo.hasOne(Bar, { foreignKey: 'myFooId' });
// Bar.belongsTo(Foo);


module.exports = db;