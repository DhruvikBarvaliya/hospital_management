const Sequelize = require("sequelize");
const Database = require("../Config/Config");

const sequelize = new Sequelize(Database.DB, Database.USER, Database.PASSWORD, {
  host: Database.HOST,
  dialect: Database.dialect,
  operatorsAliases: 0,

  pool: {
    max: Database.pool.max,
    min: Database.pool.min,
    acquire: Database.pool.acquire,
    idle: Database.pool.idle,
  },
  // logging: Database.ENV === 'production' ? false : console.log
  logging: false,
  // logging: console.log,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.AddressModel = require("../Models/AddressModel")(sequelize, Sequelize);
db.AdmissionModel = require("../Models/AdmissionModel")(sequelize, Sequelize);
db.AppointmentModel = require("../Models/AppointmentModel")(
  sequelize,
  Sequelize
);
db.BillingModel = require("../Models/BillingModel")(sequelize, Sequelize);
db.DepartmentModel = require("../Models/DepartmentModel")(sequelize, Sequelize);
db.DoctorModel = require("../Models/DoctorModel")(sequelize, Sequelize);
db.HospitalModel = require("../Models/HospitalModel")(sequelize, Sequelize);
db.InventoryModel = require("../Models/InventoryModel")(sequelize, Sequelize);
db.InvoiceModel = require("../Models/InvoiceModel")(sequelize, Sequelize);
db.MedicalRecordModel = require("../Models/MedicalRecordModel")(
  sequelize,
  Sequelize
);
db.PatientModel = require("../Models/PatientModel")(sequelize, Sequelize);
db.PharmacyModel = require("../Models/PharmacyModel")(sequelize, Sequelize);
db.PrescriptionModel = require("../Models/PrescriptionModel")(
  sequelize,
  Sequelize
);
db.RoleModel = require("../Models/RoleModel")(sequelize, Sequelize);
db.RoomModel = require("../Models/RoomModel")(sequelize, Sequelize);
db.StaffModel = require("../Models/StaffModel")(sequelize, Sequelize);
db.TestModel = require("../Models/TestModel")(sequelize, Sequelize);
db.TestResultModel = require("../Models/TestResultModel")(sequelize, Sequelize);
db.UserModel = require("../Models/UserModel")(sequelize, Sequelize);
db.WordModel = require("../Models/WordModel")(sequelize, Sequelize);


// Doctor
db.DoctorModel.hasOne(db.AddressModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

db.DoctorModel.hasOne(db.HospitalModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.HospitalModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

db.DoctorModel.hasOne(db.DepartmentModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.DepartmentModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

// AdmissionModel
db.AdmissionModel.hasOne(db.PatientModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.AdmissionModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });

db.AdmissionModel.hasOne(db.WordModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });
db.WordModel.belongsTo(db.AdmissionModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });

// Hospital
db.HospitalModel.hasOne(db.AddressModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

db.HospitalModel.hasMany(db.DepartmentModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.DepartmentModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

// Pharmacy
db.PharmacyModel.hasOne(db.AddressModel, { foreignKey: 'pharmacy_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.PharmacyModel, { foreignKey: 'pharmacy_id', onDelete: "CASCADE" });

// Patient
db.PatientModel.hasOne(db.AddressModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.PharmacyModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.PharmacyModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.HospitalModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.HospitalModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

// Appointment
db.AppointmentModel.hasOne(db.PatientModel, { foreignKey: 'appointment_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.AppointmentModel, { foreignKey: 'appointment_id', onDelete: "CASCADE" });

db.AppointmentModel.hasOne(db.DoctorModel, { foreignKey: 'appointment_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.AppointmentModel, { foreignKey: 'appointment_id', onDelete: "CASCADE" });

// Word
db.WordModel.hasMany(db.DepartmentModel, { foreignKey: 'word_id', onDelete: "CASCADE" });
db.DepartmentModel.belongsTo(db.WordModel, { foreignKey: 'word_id', onDelete: "CASCADE" });

// Staff
db.StaffModel.hasMany(db.DepartmentModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });
db.DepartmentModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

db.StaffModel.hasOne(db.AddressModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

db.StaffModel.hasOne(db.RoleModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });
db.RoleModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

// Room
db.RoomModel.hasOne(db.PatientModel, { foreignKey: 'room_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.RoomModel, { foreignKey: 'room_id', onDelete: "CASCADE" });

db.RoomModel.hasOne(db.StaffModel, { foreignKey: 'room_id', onDelete: "CASCADE" });
db.StaffModel.belongsTo(db.RoomModel, { foreignKey: 'room_id', onDelete: "CASCADE" });

// TestResult
db.TestResultModel.hasOne(db.PatientModel, { foreignKey: 'test_result_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.TestResultModel, { foreignKey: 'test_result_id', onDelete: "CASCADE" });

db.TestResultModel.hasOne(db.TestModel, { foreignKey: 'test_result_id', onDelete: "CASCADE" });
db.TestModel.belongsTo(db.TestResultModel, { foreignKey: 'test_result_id', onDelete: "CASCADE" });

// MedicalRecord
db.MedicalRecordModel.hasOne(db.PatientModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.MedicalRecordModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });

db.MedicalRecordModel.hasOne(db.DoctorModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.MedicalRecordModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });

db.MedicalRecordModel.hasOne(db.TestResultModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });
db.TestResultModel.belongsTo(db.MedicalRecordModel, { foreignKey: 'medical_record_id', onDelete: "CASCADE" });

// Prescription
db.PrescriptionModel.hasOne(db.PatientModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.PrescriptionModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });

db.PrescriptionModel.hasOne(db.DoctorModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.PrescriptionModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });

db.PrescriptionModel.hasOne(db.MedicalRecordModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });
db.MedicalRecordModel.belongsTo(db.PrescriptionModel, { foreignKey: 'prescription_id', onDelete: "CASCADE" });

// Invoice
db.InvoiceModel.hasOne(db.PatientModel, { foreignKey: 'invoice_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.InvoiceModel, { foreignKey: 'invoice_id', onDelete: "CASCADE" });

// Billing
db.BillingModel.hasOne(db.PatientModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.BillingModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });

db.BillingModel.hasOne(db.DoctorModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.BillingModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });

db.BillingModel.hasOne(db.AdmissionModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });
db.AdmissionModel.belongsTo(db.BillingModel, { foreignKey: 'billing_id', onDelete: "CASCADE" });

module.exports = db;
