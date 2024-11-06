// const nodemailer = require('nodemailer')

// export const sendEmail = async ({ email}) => {
//   try {


//     //mailTrap detail
//     const transporter = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "2ecff8c4d606d1",
//         pass: "d521d467efe45c"
//       }
//     });


//     const mailOptions = {
//       from: 'info@mailtrap.club',
//       to: email,
//       subject: emailType === "verify" ? "Your E-Commerce Varification Code is " : "Reset Password",
//       html: `<b>${userId}</b>`,
//     }
//     const mailResponse = await transporter.sendMail(mailOptions)
//     return mailResponse;
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }