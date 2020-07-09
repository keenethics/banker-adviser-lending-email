const payPalRoute = require("./pay-pal");
const payPalSuccessRoute = require("./pay-pay-success");
const sendEmail = require("./send-mail");

const routes = (app) => {
  app.use("/pay", payPalRoute());
  app.use("/pay/success", payPalSuccessRoute());
  app.use("/send-email", sendEmail());
};

module.exports = routes;
