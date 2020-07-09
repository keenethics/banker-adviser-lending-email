const nodemailer = require("nodemailer");
const Sentry = require("@sentry/node");

const transport = {
  host: "smtp.gmail.com", // e.g. smtp.gmail.com
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error) => {
  if (error) {
    Sentry.captureException(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

module.exports = transporter;
