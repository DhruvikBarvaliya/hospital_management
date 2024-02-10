const { JWT_SECRET_KEY } = require("../Config/Config");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const { sendMail } = require('../Helpers/email')
const db = require("../Config/Sequelize");
const User = db.UserModel;
const Doctor = db.DoctorModel;
const Staff = db.StaffModel;
const Patient = db.PatientModel;

module.exports = {
  register: async (req, res) => {
    if (!req.body.first_name) {
      res.status(400).send({ message: "First Name Can not be Emapty" });
      return;
    }
    const data = req.body;
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (user.length) {
      return res
        .status(400)
        .json({
          status: false,
          message: "User already registered with this Email",
        });
    } else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(data.password, salt);
      data.password = password;
      User.create(data)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User.",
          });
        });
    }
  },

  login: async (req, res) => {
    try {
      let { email, password, model } = req.body;
      let user;
      if (model == "DOCTOR") {
        user = await Doctor.findOne({ where: { email: email } });
      } else if (model == "STAFF") {
        user = await Staff.findOne({ where: { email: email } });
      } else if (model == "PATIENT") {
        user = await Patient.findOne({ where: { email: email } });
      } else {
        user = await User.findOne({ where: { email: email } });
      }

      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User Not Found" });
      }
      if (user.is_active == false) {
        return res
          .status(404)
          .json({ status: false, message: "User is Not Active" });
      }
      if (user.is_verified == false) {
        return res
          .status(404)
          .json({ status: false, message: "User is Not verified" });
      }
      let pass = await bcrypt.compare(password, user.password);
      // if (!pass) {
      //   return res.status(404).json({ status: false, message: "Password is Incorect" });
      // }
      if (user.email == email && pass) {
        let token = jsonwebtoken.sign(
          { id: user._id, email: email, role: user.role },
          JWT_SECRET_KEY,
          {
            expiresIn: "12h",
          }
        );
        return res.status(200).json({ email, token });
      } else {
        return res
          .status(401)
          .json({
            status: false,
            message: "Please Provide Valid Email And Password",
          });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({
          status: false,
          message: "Server Error",
          error: err.message || err.toString(),
        });
    }
  },
  logout: async (req, res) => {
    res.clearCookie("jwtToken");
    return res.redirect("/");
    // return User.find();
  },
  sendOtp: async (req, res) => {
    try {
      const otp = Math.floor(Math.random() * 9000 + 1000);
      let { email, for_forgot } = req.body;
      console.log(otp, email);
      const user = await User.findOne({ where: { email: email } });
      if (user == null) {
        return res
          .status(404)
          .json({
            status: false,
            message: `Employee Not Found With Email :- ${email} `,
          });
      } else {
        let purpose = "";
        if (for_forgot) {
          const user = await User.update(
            { forgot_otp: otp },
            {
              where: {
                email: email,
              },
            }
          );
          purpose = "Forgot Password";
        } else {
          const user = await User.update(
            { otp: otp },
            {
              where: {
                email: email,
              },
            }
          );
          purpose = "Verify Email";
        }
        sendMail(email, otp);
        return res
          .status(401)
          .json({
            status: true,
            message: `Otp Sent Successfully on ${email} for ${purpose}, Please Check and Verify ✔`,
          });
      }
    } catch (err) {
      return res
        .status(500)
        .json({
          status: false,
          message: "Server Error",
          error: err.message || err.toString(),
        });
    }
  },
  verify: async (req, res) => {
    try {
      const { email, otp } = req.body;
      const user = await User.findOne({ where: { email: email } });
      if (user == null) {
        return res
          .status(404)
          .json({
            status: false,
            message: `Employee Not Found With Email :- ${email} `,
          });
      } else {
        if (user.otp == otp) {
          const user = await User.update(
            { is_verified: true, is_active: true },
            {
              where: {
                email: email,
              },
            }
          );

          return res
            .status(200)
            .json({
              status: true,
              message: `Varification SuccessFully For Email :- ${email} `,
            });
        } else {
          return res
            .status(404)
            .json({ status: false, message: `Please Enter Valid OTP` });
        }
      }
    } catch (err) {
      return res
        .status(500)
        .json({
          status: false,
          message: "Server Error",
          error: err.message || err.toString(),
        });
    }
  },
  changePassword: async (req, res) => {
    try {
      const { email, password, newPassword } = req.body;
      const salt = await bcrypt.genSalt(10);
      const updatedPassword = await bcrypt.hash(newPassword, salt);
      const user = await User.findOne({ where: { email: email } });

      if (user.email == email && bcrypt.compare(password, user.password)) {
        const user = await User.update(
          { password: updatedPassword },
          {
            where: {
              email: email,
            },
          }
        );
        return res
          .status(200)
          .json({
            status: true,
            message: `Password Updated Successfully For Email :- ${email} `,
          });
      } else {
        return res
          .status(401)
          .json({
            status: false,
            message: "Please Provide Valid Email And Password",
          });
      }
    } catch (err) {
      return res
        .status(500)
        .json({
          status: false,
          message: "Server Error",
          error: err.message || err.toString(),
        });
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email, otp, newPassword } = req.body;
      const salt = await bcrypt.genSalt(10);
      const updatedPassword = await bcrypt.hash(newPassword, salt);
      const user = await User.findOne({ where: { email: email } });
      if (user == null) {
        return res
          .status(404)
          .json({
            status: false,
            message: `Employee Not Found With Email :- ${email} `,
          });
      }
      if (user.email == email && user.forgot_otp == otp) {
        const user = await User.update(
          { password: updatedPassword },
          {
            where: {
              email: email,
            },
          }
        );

        return res
          .status(200)
          .json({
            status: true,
            message: `Password Updated Successfully For Email :- ${email} `,
          });
      } else {
        return res
          .status(401)
          .json({
            status: false,
            message: "Please Provide Valid Email And Otp",
          });
      }
    } catch (err) {
      return res
        .status(500)
        .json({
          status: false,
          message: "Server Error",
          error: err.message || err.toString(),
        });
    }
  },
};
