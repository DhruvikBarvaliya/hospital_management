const { jwt_key } = require("../Config/Config");
// const UserModel = require("../Models/UserModel");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require('../Helpers/email')
const db = require('../Config/Sequelize');
// const DoctorModel = require("../Models/DoctorModel");
const UserModel = db.UserModel
const DoctorModel = db.DoctorModel
const StaffModel = db.StaffModel
const PatientModel = db.PatientModel
module.exports = {
  register: async (req, res) => {
    try {
      // const {
      //   role,
      //   first_name,
      //   middle_name,
      //   last_name,
      //   address,
      //   pincode,
      //   country,
      //   state,
      //   city,
      //   phone,
      //   email,
      //   gender,
      //   department_id,
      //   designation_id,
      //   manager_id,
      //   job_id,
      //   shift,
      //   date_of_birth,
      //   date_of_hire,
      //   salary,
      //   is_verified,
      //   is_active,
      //   last_login,
      //   modifyed_by, } = req.body;

      // const salt = await bcrypt.genSalt(10);
      // const password = await bcrypt.hash(req.body.password, salt);

      // const user = await UserModel.findOne({ where:{ email: email }});

      // if (user) {
      //   return res.status(400).json({ status: false, message: "User already registered" });
      // } else {
      //   const userData = new UserModel({
      //     role,
      //     first_name,
      //     middle_name,
      //     last_name,
      //     full_name: first_name + " " + middle_name + " " + last_name,
      //     address,
      //     pincode,
      //     country,
      //     state,
      //     city,
      //     phone,
      //     email,
      //     password,
      //     gender,
      //     department_id,
      //     designation_id,
      //     manager_id,
      //     job_id,
      //     shift,
      //     date_of_birth,
      //     date_of_hire,
      //     salary,
      //     is_verified,
      //     is_active,
      //     last_login,
      //     modifyed_by,
      //   });
      //   userData
      //     .save()
      //     .then((data) => {
      //       return res
      //         .status(201)
      //         .json({ status: true, message: "User created Successfully", data });
      //     })
      //     .catch((error) => {
      //       return res.status(400).json({ message: error.message, error: error });
      //     });
      // }

      // if (!req.body.name) {
      //   res.status(400).send({ message: "Book Name Can not be Emapty" })
      //   return;
      // }

      const data = req.body;
      const user = await UserModel.findOne({ where:{ email: data.email }});

      if (user) {
        return res.status(400).json({ status: false, message: "User already registered" });
      } else {

        const salt = await bcrypt.genSalt(10);
        const encryptPassword = await bcrypt.hash(req.body.password, salt);
        data.password = encryptPassword
        // data.full_name = data.first_name || "" + " " + data.middle_name || "" + " " + data.last_name || "",
        UserModel.create(data).then(data => {
          res.send(data);
        }).catch(error => {
          res.status(400).send({
            message: error.message || "Some error occurred while creating the user."
          })
        })
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await UserModel.findOne({ where: { email: email } })

      // user = await DoctorModel.findOne({ where: { email: email } })
      // user = await StaffModel.findOne({ where: { email: email } })
      // user = await PatientModel.findOne({ where: { email: email } })

      if (!user) {
        return res.status(404).json({ status: false, message: "User Not Found" });
      }
      if (user.is_active == false) {
        return res.status(404).json({ status: false, message: "User is Not Active" });
      }
      if (user.is_verified == false) {
        return res.status(404).json({ status: false, message: "User is Not verified" });
      }
      let pass = await bcrypt.compare(password, user.password);
      // if (!pass) {
      //   return res.status(404).json({ status: false, message: "Password is Incorect" });
      // }
      if (user.email == email && pass) {
        let token = jsonwebtoken.sign(
          { id: user._id, email: email, role: user.role },
          jwt_key, {
          expiresIn: '12h'
        }
        );
        return res.status(200).json({ email, token });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Please Provide Valid Email And Password" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  },
  logout: async (req, res) => {
    return UserModel.find();
  },
  sendOtp: async (req, res) => {
    try {
      const otp = Math.floor(Math.random() * 9000 + 1000);
      let { email, for_forgot } = req.body
      console.log(otp, email);
      const user = await UserModel.findOne({ where: { email: email } });
      if (user == null) {
        return res
          .status(404)
          .json({ status: false, message: `Employee Not Found With Email :- ${email} ` });
      }
      else {
        let purpose = ""
        if (for_forgot) {

          const user = await UserModel.update({ forgot_otp: otp }, {
            where: {
              email: email,
            },
          });
          purpose = "Forgot Password"

        }
        else {
          const user = await UserModel.update({ otp: otp }, {
            where: {
              email: email,
            },
          });
          purpose = "Verify Email"

        }
        sendMail(email, otp)
        return res
          .status(401)
          .json({ status: true, message: `Otp Sent Successfully on ${email} for ${purpose}, Please Check and Verify ✔` });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  },
  verify: async (req, res) => {
    try {
      const { email, otp } = req.body
      const user = await UserModel.findOne({ where: { email: email } });
      if (user == null) {
        return res
          .status(404)
          .json({ status: false, message: `Employee Not Found With Email :- ${email} ` });
      } else {
        if (user.otp == otp) {

          const user = await UserModel.update({ is_verified: true, is_active: true }, {
            where: {
              email: email,
            },
          });

          return res
            .status(200)
            .json({ status: true, message: `Varification SuccessFully For Email :- ${email} ` });
        }
        else {
          return res
            .status(404)
            .json({ status: false, message: `Please Enter Valid OTP` });
        }
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  },
  changePassword: async (req, res) => {
    try {
      const { email, password, newPassword } = req.body
      const salt = await bcrypt.genSalt(10);
      const updatedPassword = await bcrypt.hash(newPassword, salt);
      const user = await UserModel.findOne({ where: { email: email } })

      if (user.email == email && bcrypt.compare(password, user.password)) {

        const user = await UserModel.update({ password: updatedPassword }, {
          where: {
            email: email,
          },
        });
        return res
          .status(200)
          .json({ status: true, message: `Password Updated Successfully For Email :- ${email} ` });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Please Provide Valid Email And Password" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email, otp, newPassword } = req.body
      const salt = await bcrypt.genSalt(10);
      const updatedPassword = await bcrypt.hash(newPassword, salt);
      const user = await UserModel.findOne({ where: { email: email } })
      if (user == null) {
        return res
          .status(404)
          .json({ status: false, message: `Employee Not Found With Email :- ${email} ` });
      }
      if (user.email == email && user.forgot_otp == otp) {
        const user = await UserModel.update({ password: updatedPassword }, {
          where: {
            email: email,
          },
        });

        return res
          .status(200)
          .json({ status: true, message: `Password Updated Successfully For Email :- ${email} ` });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Please Provide Valid Email And Otp" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: 'Server Error', error: err.message || err.toString() });
    }
  }

};