const express = require("express");

const app = express();
const path = require("path");
const routes = require("./routes");

require("dotenv").config();

require("./utils/nodemailer-transport");
require("./utils/pay-payl-configure");
require("./utils/sentry-init");

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`========= SERVER IS RUNNING AT ${PORT}`));


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
