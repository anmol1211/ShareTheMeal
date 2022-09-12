const nodemailer = require('nodemailer')
const fs = require('fs')

function sendEmail(template, subject, email, callback) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'localdukan12@gmail.com',
      pass: 'rpoptlfescmmaclx',
    },
  })

  const contents = '' + fs.readFileSync('./email_templates/' + template)
  const mailOptions = {
    from: 'localdukan12@gmail.com',
    to: email,
    subject: subject,
    html: contents,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(error)
    console.log(info)

    callback(error, info)
  })
}

module.exports = {
  sendEmail: sendEmail,
}
