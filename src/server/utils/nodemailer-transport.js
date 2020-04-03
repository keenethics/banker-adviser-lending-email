const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com", // e.g. smtp.gmail.com
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

module.exports = transporter;
