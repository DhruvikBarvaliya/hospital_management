const express = require('express');
const router = express.Router();
const AddressRoute = require('./AddressRoute');
const AdmissionRoute = require('./AdmissionRoute');
const AuthRoute = require("./AuthRoute");
const BillingRoute = require('./BillingRoute');
const DepartmentRoute = require('./DepartmentRoute');
const DoctorRoute = require('./DoctorRoute');
const HospitalRoute = require('./HospitalRoute');
const InventoryRoute = require('./InventoryRoute');
const InvoiceRoute = require('./InvoiceRoute');
const MedicalRoute = require('./MedicalRoute');
const PatientRoute = require('./PatientRoute');
const PharmacyRoute = require('./PharmacyRoute');
const PrescriptionRoute = require('./PrescriptionRoute');
const RecordRoute = require('./RecordRoute');
const ResultRoute = require('./ResultRoute');
const RoleRoute = require('./RoleRoute');
const RoomRoute = require('./RoomRoute');
const StaffRoute = require('./StaffRoute');
const TestRoute = require('./TestRoute');
const WordRoute = require('./WordRoute');

router.get('/', (req, res) => {
    res.send("Inside Index Router")
})

router.use('/v1',
AddressRoute,
AdmissionRoute,
AuthRoute,
BillingRoute,
DepartmentRoute,
DoctorRoute,
HospitalRoute,
InventoryRoute,
InvoiceRoute,
MedicalRoute,
PatientRoute,
PharmacyRoute,
PrescriptionRoute,
RecordRoute,
ResultRoute,
RoleRoute,
RoomRoute,
StaffRoute,
TestRoute,
WordRoute,
)

module.exports = router