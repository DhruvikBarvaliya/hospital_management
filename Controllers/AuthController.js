const { JWT_SECRET_KEY } = require("../Config/Config");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../Config/Sequelize");
const { UserModel, DoctorModel, StaffModel, PatientModel } = db;

module.exports = {
  register: async (req, res) => {
    try {
      const { first_name, email, password } = req.body;
      if (!first_name) {
        return res.status(400).send({ message: "First Name Can not be Empty" });
      }

      const user = await UserModel.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({
          status: false,
          message: "User already registered with this Email",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await UserModel.create({ first_name, email, password: hashedPassword });
      res.send(newUser);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password, model } = req.body;
      let user;

      switch (model) {
        case "DOCTOR":
          user = await DoctorModel.findOne({ where: { email } });
          break;
        case "STAFF":
          user = await StaffModel.findOne({ where: { email } });
          break;
        case "PATIENT":
          user = await PatientModel.findOne({ where: { email } });
          break;
        default:
          user = await UserModel.findOne({ where: { email } });
      }

      if (!user) {
        return res.status(404).json({ status: false, message: "User Not Found" });
      }
      if (!user.is_active) {
        return res.status(404).json({ status: false, message: "User is Not Active" });
      }
      if (!user.is_verified) {
        return res.status(404).json({ status: false, message: "User is Not verified" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jsonwebtoken.sign(
          { id: user.id, email, role: user.role },
          JWT_SECRET_KEY,
          { expiresIn: "12h" }
        );
        return res.status(200).json({ email, token });
      } else {
        return res.status(401).json({
          status: false,
          message: "Please Provide Valid Email And Password",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: false,
        message: "Server Error",
        error: err.message || err.toString(),
      });
    }
  },

  logout: async (req, res) => {
    res.clearCookie("jwtToken");
    return res.redirect("/");
  },

  sendOtp: async (req, res) => {
    try {
      const otp = Math.floor(Math.random() * 9000 + 1000);
      const { email, for_forgot } = req.body;
      console.log(otp, email);
      const user = await UserModel.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: `Employee Not Found With Email :- ${email} `,
        });
      }

      let purpose = "";
      if (for_forgot) {
        await UserModel.update({ forgot_otp: otp }, { where: { email } });
        purpose = "Forgot Password";
      } else {
        await UserModel.update({ otp: otp }, { where: { email } });
        purpose = "Verify Email";
      }

      // sendMail(email, otp); // Uncomment this line if sendMail function is defined
      return res.status(401).json({
        status: true,
        message: `Otp Sent Successfully on ${email} for ${purpose}, Please Check and Verify ✔`,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Server Error",
        error: err.message || err.toString(),
      });
    }
  },

  verify: async (req, res) => {
    try {
      const { email, otp } = req.body;
      const user = await UserModel.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: `Employee Not Found With Email :- ${email} `,
        });
      }

      if (user.otp == otp) {
        await UserModel.update({ is_verified: true, is_active: true }, { where: { email } });

        return res.status(200).json({
          status: true,
          message: `Verification Successfully For Email :- ${email} `,
        });
      } else {
        return res.status(404).json({ status: false, message: `Please Enter Valid OTP` });
      }
    } catch (err) {
      return res.status(500).json({
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
      const user = await UserModel.findOne({ where: { email } });

      if (user.email == email && bcrypt.compare(password, user.password)) {
        await UserModel.update({ password: updatedPassword }, { where: { email } });

        return res.status(200).json({
          status: true,
          message: `Password Updated Successfully For Email :- ${email} `,
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "Please Provide Valid Email And Password",
        });
      }
    } catch (err) {
      return res.status(500).json({
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
      const user = await UserModel.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: `Employee Not Found With Email :- ${email} `,
        });
      }

      if (user.email == email && user.forgot_otp == otp) {
        await UserModel.update({ password: updatedPassword }, { where: { email } });

        return res.status(200).json({
          status: true,
          message: `Password Updated Successfully For Email :- ${email} `,
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "Please Provide Valid Email And Otp",
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Server Error",
        error: err.message || err.toString(),
      });
    }
  },

  drop: async (req, res) => {
    try {
      const drop = req.params.drop;
      await db.sequelize.sync({ force: drop });
      return res.status(200).json({
        status: true,
        message: `Drop and re-sync db`,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Server Error",
        error: err.message || err.toString(),
      });
    }
  },
};
