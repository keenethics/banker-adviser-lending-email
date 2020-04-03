const payPalRoute = require("./pay-pal");
const payPalSuccessRoute = require("./pay-pay-success");
const sendEmail = require("./send-mail");

const routes = (app) => {
  app.use("/", payPalRoute());
  app.use("/", payPalSuccessRoute());
  app.use("/", sendEmail());
};

module.exports = routes;
