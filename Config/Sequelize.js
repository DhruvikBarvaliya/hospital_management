const Sequelize = require("sequelize");
const Database = require("../Config/Config");

const sequelize = new Sequelize(Database.DB, Database.USER, Database.PASSWORD, {
  host: Database.HOST,
  dialect: Database.dialect,
  operatorsAliases: 0,
  pool: Database.pool,
  logging: false,
});

const db = {
  Sequelize,
  sequelize,
};

const models = [
  "AddressModel",
  "AdmissionModel",
  "AppointmentModel",
  "BillingModel",
  "DepartmentModel",
  "DoctorModel",
  "HospitalModel",
  "InventoryModel",
  "InvoiceModel",
  "MedicalRecordModel",
  "PatientModel",
  "PharmacyModel",
  "PrescriptionModel",
  "RoleModel",
  "RoomModel",
  "StaffModel",
  "TestModel",
  "TestResultModel",
  "UserModel",
  "WordModel",
];

models.forEach((modelName) => {
  db[modelName] = require(`../Models/${modelName}`)(sequelize, Sequelize);
});

db.DoctorModel.hasOne(db.AddressModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.DoctorModel, { onDelete: "CASCADE" });

module.exports = db;
