const express = require("express");
const payPal = require("paypal-rest-sdk");
const Sentry = require("@sentry/node");

const router = express.Router();

module.exports = function payPalPayRoute() {
  router.post("/pay", (req, res) => {
    const createPaymentJson = {
      intent: "SALE",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Acces to bank",
                sku: "Acces to bank",
                price: "100",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "100",
          },
          description: "Acces to 300 banks",
        },
      ],
    };
    payPal.payment.create(createPaymentJson, (error, payment) => {
      if (error) {
        Sentry.captureException(error);
        console.log(error.response.details);
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            res.send(payment.links[i].href);
          }
        }
      }
    });
  });
  return router;
};
