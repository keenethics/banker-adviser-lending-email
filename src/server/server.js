const express = require("express");
const payPal = require("paypal-rest-sdk");

const app = express();
const path = require("path");
const routes = require("./routes");
require("./utils/nodemailer-transport");

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`========= SERVER IS RUNNING AT ${PORT}`));

payPal.configure({
  mode: "sandbox", // sandbox or live
  client_id: "AbZWmbrDBXehpEh-uiYqjsOOUW7tGgbiB1xIhN6J6xGnpTr7J6_n2egBJPl-CXrO9AYz6x3BPjts2TdN",
  client_secret: "EHFg5QqoESFsfEk-ciFrfwE6enVD8y9pj3bZ_q3l5tjKrP2qwy3yJsHEZ6BNvm3FGEDi7xAQU6Pz5gHe",
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "./../../build")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./../../build", "index.html"));
});

routes(app);
