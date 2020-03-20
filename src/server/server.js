const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("========= SERVER IS RUNNING AT " + PORT));

app.use(express.json());
app.use(express.static(path.join(__dirname, "./../../build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./../../build", "index.html"));
});

var transport = {
  host: "smtp.gmail.com", // e.g. smtp.gmail.com
  auth: {
    user: "tabakastepan@gmail.com",
    pass: "stepi094511189"
  },
  tls: {
    rejectUnauthorized: false
  }
};

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

app.post("/send-email", function(req, res, next) {
  var mail = {
    from: "Mike Casey <mike.casey@techcxo.com>",
    data: new Date().toUTCString(),
    to: req.body.value,
    subject: "Fwd: Feedback and Request list for BankerAdvisor",
    html: req.body.messageHtml
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log({ ...err });
      res.json(err).status(400);
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});
