const { user, password } = require("../Config/Config");
const nodemailer = require("nodemailer");

let sendMail = async (to, otp) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: password,
      },
    });

    var mailOptions = {
      from: user,
      to,
      subject: "Verification From HRMS ✔",
      text: "For Verify Email",
      html: `<P>This is OTP For Verify Email</p><b>${otp}</b> `,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    console.log("Email MessageId: " + info.messageId);
  } catch (err) {
    console.error(err);
    throw new Error("Server Error");
  }
};

module.exports = { sendMail };
