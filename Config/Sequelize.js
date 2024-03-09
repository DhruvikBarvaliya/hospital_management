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

db.DoctorModel.hasMany(db.AppointmentModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.AppointmentModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

db.DoctorModel.hasOne(db.MedicalRecordModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.MedicalRecordModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

db.DoctorModel.hasMany(db.PrescriptionModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.PrescriptionModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

db.DoctorModel.hasMany(db.BillingModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });
db.BillingModel.belongsTo(db.DoctorModel, { foreignKey: 'doctor_id', onDelete: "CASCADE" });

//Department
db.DepartmentModel.hasMany(db.DoctorModel, { foreignKey: 'department_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.DepartmentModel, { foreignKey: 'department_id', onDelete: "CASCADE" });

// Hospital
db.HospitalModel.hasOne(db.AddressModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

db.HospitalModel.hasMany(db.DepartmentModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.DepartmentModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

db.HospitalModel.hasMany(db.DoctorModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.DoctorModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

db.HospitalModel.hasMany(db.PatientModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });
db.PatientModel.belongsTo(db.HospitalModel, { foreignKey: 'hospital_id', onDelete: "CASCADE" });

// Pharmacy
db.PharmacyModel.hasOne(db.AddressModel, { foreignKey: 'pharmacy_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.PharmacyModel, { foreignKey: 'pharmacy_id', onDelete: "CASCADE" });

// Patient
db.PatientModel.hasOne(db.AdmissionModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.AdmissionModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.AddressModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.PharmacyModel, { foreignKey: 'patient_id' });
db.PharmacyModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.AppointmentModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.AppointmentModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.TestResultModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.TestResultModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.MedicalRecordModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.MedicalRecordModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.PrescriptionModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.PrescriptionModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.InvoiceModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.InvoiceModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

db.PatientModel.hasOne(db.BillingModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });
db.BillingModel.belongsTo(db.PatientModel, { foreignKey: 'patient_id', onDelete: "CASCADE" });

// Word
db.WordModel.hasMany(db.DepartmentModel, { foreignKey: 'word_id' });
db.DepartmentModel.belongsTo(db.WordModel, { foreignKey: 'word_id' });

db.WordModel.hasOne(db.AdmissionModel, { foreignKey: 'word_id', onDelete: "CASCADE" });
db.AdmissionModel.belongsTo(db.WordModel, { foreignKey: 'word_id', onDelete: "CASCADE" });

// Staff
db.StaffModel.hasOne(db.DepartmentModel, { foreignKey: 'staff_id' });
db.DepartmentModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

db.StaffModel.hasOne(db.AddressModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });
db.AddressModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

db.StaffModel.hasOne(db.RoleModel, { foreignKey: 'staff_id' });
db.RoleModel.belongsTo(db.StaffModel, { foreignKey: 'staff_id', onDelete: "CASCADE" });

// Room
db.RoomModel.hasMany(db.PatientModel, { foreignKey: 'room_id' });
db.PatientModel.belongsTo(db.RoomModel, { foreignKey: 'room_id' });

db.RoomModel.hasMany(db.StaffModel, { foreignKey: 'room_id' });
db.StaffModel.belongsTo(db.RoomModel, { foreignKey: 'room_id' });

// TestResult 
db.TestModel.hasOne(db.TestResultModel, { foreignKey: 'test_id', onDelete: "CASCADE" });
db.TestResultModel.belongsTo(db.TestModel, { foreignKey: 'test_id', onDelete: "CASCADE" });

// MedicalRecord
db.MedicalRecordModel.hasMany(db.TestResultModel, { foreignKey: 'medical_record_id' });
db.TestResultModel.belongsTo(db.MedicalRecordModel, { foreignKey: 'medical_record_id' });

db.MedicalRecordModel.hasOne(db.PrescriptionModel, { foreignKey: 'medical_record_id' });
db.PrescriptionModel.belongsTo(db.MedicalRecordModel, { foreignKey: 'medical_record_id' });

// Admission
db.AdmissionModel.hasOne(db.BillingModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });
db.BillingModel.belongsTo(db.AdmissionModel, { foreignKey: 'admission_id', onDelete: "CASCADE" });

module.exports = db;
