const nodemailer = require('nodemailer');

const sendEmail = async options => {
    
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 25,
        auth: {
          user: "e94b39dd9e1c4e",
          pass: "d0e119dd5d5375"
        },
        connectionTimeout: 5 * 60 * 1000,
        tls:{
            rejectUnauthorized:false
        }
      });
    // console.log(transporter)

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    // console.log(message)

    await transporter.sendMail(message)
}

module.exports = sendEmail;