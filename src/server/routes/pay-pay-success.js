/* eslint-disable no-unused-vars */
const express = require("express");
const payPal = require("paypal-rest-sdk");
const Sentry = require("@sentry/node");
const transporter = require("../utils/nodemailer-transport");

const router = express.Router();

module.exports = function payPalSuccessRoute() {
  router.get("/", (req, res) => {
    const { PayerID, paymentId } = req.query;

    const executePaymentJson = {
      payer_id: PayerID,
      transactions: [{
        amount: {
          currency: "USD",
          total: "100",
        },
      }],
    };

    payPal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
      if (error) {
        Sentry.captureException(error);
        throw error;
      } else {
        const mail = {
          from: "Mike Casey <mike.casey@techcxo.com>",
          data: new Date().toUTCString(),
          to: "stepan.tabaka@keenethics.com",
          subject: "Fwd: Feedback and Request list for BankerAdvisor",
          html: req.query.messageHtml,
          attachments: [
            {
              filename: "dos.docx",
              path: "https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx",
            },
          ],
        };
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            Sentry.captureException(error);
          }
        });
        res.status(200).json({ url: "https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx" });
        // res.download("https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx", "dox.docx")
      }
    });
  });

  return router;
};
