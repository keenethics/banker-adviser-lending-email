/* eslint-disable no-unused-vars */
const express = require("express");

const router = express.Router();
const transporter = require("../utils/nodemailer-transport");

module.exports = function sendEmailRoute() {
  router.post("/send-email", (req, res) => {
    const mail = {
      from: "Mike Casey <mike.casey@techcxo.com>",
      data: new Date().toUTCString(),
      to: req.body.value,
      subject: "Fwd: Feedback and Request list for BankerAdvisor",
      html: req.body.messageHtml,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log({ ...err });
        res.json(err).status(400);
      } else {
        res.json({
          msg: "success",
        });
      }
    });
  });
  return router;
};
