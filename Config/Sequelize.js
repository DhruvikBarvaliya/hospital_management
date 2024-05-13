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

// In your Department model
db.HospitalModel.hasMany(db.DepartmentModel, { foreignKey: "hospital_id" }); // A hospital can have many departments
db.DepartmentModel.belongsTo(db.HospitalModel, { foreignKey: "hospital_id" }); // A department belongs to one hospital

db.HospitalModel.hasMany(db.DoctorModel, { foreignKey: "hospital_id" });
db.DoctorModel.belongsTo(db.HospitalModel, { foreignKey: "hospital_id" });

db.HospitalModel.hasMany(db.PharmacyModel, { foreignKey: "hospital_id" });
db.PharmacyModel.belongsTo(db.HospitalModel, { foreignKey: "hospital_id" });

db.HospitalModel.hasMany(db.PatientModel, { foreignKey: "hospital_id" });
db.PatientModel.belongsTo(db.HospitalModel, { foreignKey: "hospital_id" });

db.DepartmentModel.hasMany(db.DoctorModel, { foreignKey: "department_id" });
db.DoctorModel.belongsTo(db.DepartmentModel, { foreignKey: "department_id" });

db.DepartmentModel.hasMany(db.WordModel, { foreignKey: "department_id" });
db.WordModel.belongsTo(db.DepartmentModel, { foreignKey: "department_id" });

db.DoctorModel.hasMany(db.PatientModel, { foreignKey: "doctor_id" });
db.PatientModel.belongsTo(db.DoctorModel, { foreignKey: "doctor_id" });

db.DoctorModel.hasMany(db.AppointmentModel, { foreignKey: "doctor_id" });
db.AppointmentModel.belongsTo(db.DoctorModel, { foreignKey: "doctor_id" });

db.DoctorModel.hasMany(db.PrescriptionModel, { foreignKey: "doctor_id" });
db.PrescriptionModel.belongsTo(db.DoctorModel, { foreignKey: "doctor_id" });

db.PharmacyModel.hasMany(db.PatientModel, { foreignKey: "pharmacy_id" });
db.PatientModel.belongsTo(db.PharmacyModel, { foreignKey: "pharmacy_id" });

db.PatientModel.hasMany(db.AppointmentModel, { foreignKey: "patient_id" });
db.AppointmentModel.belongsTo(db.PatientModel, { foreignKey: "patient_id" });

db.PatientModel.hasMany(db.TestModel, { foreignKey: "patient_id" });
db.TestModel.belongsTo(db.PatientModel, { foreignKey: "patient_id" });

db.PatientModel.hasOne(db.MedicalRecordModel, { foreignKey: "patient_id" });
db.MedicalRecordModel.belongsTo(db.PatientModel, { foreignKey: "patient_id" });

db.PatientModel.hasMany(db.PrescriptionModel, { foreignKey: "patient_id" });
db.PrescriptionModel.belongsTo(db.PatientModel, { foreignKey: "patient_id" });

db.PatientModel.hasMany(db.AdmissionModel, { foreignKey: "patient_id" });
db.AdmissionModel.belongsTo(db.PatientModel, { foreignKey: "patient_id" });

db.WordModel.hasMany(db.RoomModel, { foreignKey: "word_id" });
db.RoomModel.belongsTo(db.WordModel, { foreignKey: "word_id" });

db.WordModel.hasMany(db.AdmissionModel, { foreignKey: "word_id" });
db.AdmissionModel.belongsTo(db.WordModel, { foreignKey: "word_id" });

db.RoomModel.hasMany(db.AdmissionModel, { foreignKey: "room_id" });
db.AdmissionModel.belongsTo(db.RoomModel, { foreignKey: "room_id" });

db.TestModel.hasOne(db.TestResultModel, { foreignKey: "test_id" });
db.TestResultModel.belongsTo(db.TestModel, { foreignKey: "test_id" });

db.PrescriptionModel.hasOne(db.InvoiceModel, { foreignKey: "prescription_id" });
db.InvoiceModel.belongsTo(db.PrescriptionModel, { foreignKey: "prescription_id" });

db.InvoiceModel.hasOne(db.BillingModel, { foreignKey: "invoice_id" });
db.BillingModel.belongsTo(db.InvoiceModel, { foreignKey: "invoice_id" });

db.InventoryModel.hasMany(db.PharmacyModel, { foreignKey: "inventory_id" });
db.PharmacyModel.belongsTo(db.InventoryModel, { foreignKey: "inventory_id" });

db.RoomModel.hasMany(db.StaffModel, { foreignKey: "role_id" });
db.StaffModel.belongsTo(db.RoomModel, { foreignKey: "role_id" });

module.exports = db;
