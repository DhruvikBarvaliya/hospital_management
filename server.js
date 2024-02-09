const app = require("./app")
const db = require('./Config/Sequelize');
const { PORT } = require('./Config/Config')

db.sequelize.sync({ force: false }).then(async () => {
    console.log("Drop and re-sync db.");
    if (false) {

        await db.UserModel.create({
            role: "SUPER_ADMIN",
            first_name: "super",
            last_name: "admin",
            phone_number: "7894560322",
            email: "superadmin@gmail.com",
            password: "superadmin",
            is_verified: true,
            is_active: true,
            status: true,
        }).then(res => {
            setTimeout(function () {
                console.log(">>> SUPER_ADMIN");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.UserModel.create({
            role: "ADMIN",
            first_name: "apollo",
            last_name: "admin",
            phone_number: "6502314789",
            email: "apolloadmin@gmail.com",
            password: "apolloadmin",
            is_verified: true,
            is_active: true,
            status: true,
        }).then(res => {
            setTimeout(function () {
                console.log(">>> APOLLO ADMIN");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.RoleModel.create({
            role_name: "SUPER_ADMIN",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("1> Role");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        db.AddressModel.create({
            streetAddress1: "Bapa Sitaram",
            streetAddress2: "Yogi choke",
            country: "India",
            state: "Gujarat",
            city: "Surat",
            zip_code: 395006,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("2> Address");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.HospitalModel.create({
            hospital_name: "Apollo",
            hospital_address: 1,
            hospital_phone_number: "9876543210",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("3> Hospital");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.DepartmentModel.create({
            department_name: "Apollo",
            hospital_id: 1,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("4> Department");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.DoctorModel.create({
            doctor_first_name: "Dhruvik",
            doctore_last_name: "Barvaliya",
            department_id: 1,
            doctore_phone_number: "7567270030",
            specialization: "Dermatology",
            email: "dhruvik@gmail.com",
            doctor_address: 1,
            salary: 50000,
            hospital_id: 1,
            qualification: "MBBS",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1            
        }).then(res => {
            setTimeout(function () {
                console.log("5> Doctor");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.PharmacyModel.create({
            pharmacy_name: "Apollo Pharmacy",
            pharmacy_address: 1,
            pharmacy_phone_number: "7894561230",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("6> Pharmacy");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.PatientModel.create({
            patient_first_name: "vikas",
            patient_last_name: "Dubay",
            patient_address: 1,
            patient_phone_number: "9876543210",
            pharmacy_id: 1,
            date_of_birth: "1994-01-01",
            gender: "Male",
            hospital_id: 1,
            email: "vikas@gmail.com",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("7> Patient");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.AppointmentModel.create({
            patient_id: 1,
            doctor_id: 1,
            date: "1994-12-01",
            time: "2023/03/03 04:33:12",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("8> Appointment");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.WordModel.create({
            word_name: "Garud",
            capacity: 20,
            departmnet_id: 1,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("9> Word");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.StaffModel.create({
            department_id: 1,
            staff_first_name: "Suman",
            staff_last_name: "Magya",
            staff_address: 1,
            staff_phone_number: "6598741230",
            email: "suman@gmail.com",
            position: "Sr",
            role: 1,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("10> Staff");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.RoomModel.create({
            patient_id: 1,
            staff_id: 1,
            admission_date: "2020-01-01",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("11> Staff");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.TestModel.create({
            test_name: "Fervor",
            description: "fervor high temperature",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("12> Test");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.TestResultModel.create({
            patient_id: 1,
            test_id: 1,
            result_details: "fervor high temperature 100",
            test_date: "2024-02-03",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("13> Test");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.MedicalRecordModel.create({
            patient_id: 1,
            doctor_id: 1,
            record_date: "2056-05-06",
            diagnosis: "Anxiety",
            prescription: "Paracetamol",
            test_result: 1,
            notes: "Next chekup on Coming Sunday",
            problem: "High Anxiety",
            date_of_examination: "2011-06-05",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("14> MedicalRecord");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.PrescriptionModel.create({
            patient_id: 1,
            medication_name: "Paracetamol",
            prescription_date: "2023-01-02",
            prescription_cost: 250,
            doctor_id: 1,
            medication_id: 1,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("15> Prescription");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.InvoiceModel.create({
            patient_id: 1,
            service_description: "Good",
            cost: 10,
            total: 20,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("16> Invoice");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.InventoryModel.create({
            item_id: "Para01",
            item_name: "Paracetamol",
            quantity_available: 100,
            unit_price: 10,
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("17> Inventory");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.AdmissionModel.create({
            patient_id: 1,
            ward_id: 1,
            admission_date: "2020-01-01",
            discharge_date: "2023-04-05",
            reason: "not fill good",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("18> Admission");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });

        await db.BillingModel.create({
            patient_id: 1,
            doctore_id: 1,
            admission_id: 1,
            bill_date: "1994-02-06",
            total_amount: 1200,
            payment_status: "pending",
            is_active: true,
            status: true,
            // created_by: 1,
            // updated_by: 1
        }).then(res => {
            setTimeout(function () {
                console.log("19> Billing");
            }, 1000);
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });


    }
}).catch((error) => {
    console.error('Unable to create table : ', error);
});;

app.listen(PORT, console.log(`Server is Running on Port No http://localhost:${PORT} `))