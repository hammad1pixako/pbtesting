require('dotenv').config();

const nodemailer = require('nodemailer')

const sendEmail = async ({ email }) => {
  try {
    // mailTrap details from .env file
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Reset Password",
      html: `<b>Reset Password</b>`,
    }

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = sendEmail;
