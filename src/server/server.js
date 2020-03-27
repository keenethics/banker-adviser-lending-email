const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 3333;
const payPal = require("paypal-rest-sdk");
app.listen(PORT, () => console.log("========= SERVER IS RUNNING AT " + PORT));

payPal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AbZWmbrDBXehpEh-uiYqjsOOUW7tGgbiB1xIhN6J6xGnpTr7J6_n2egBJPl-CXrO9AYz6x3BPjts2TdN',
  'client_secret': 'EHFg5QqoESFsfEk-ciFrfwE6enVD8y9pj3bZ_q3l5tjKrP2qwy3yJsHEZ6BNvm3FGEDi7xAQU6Pz5gHe'
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "./../../build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./../../build", "index.html"));
});

var transport = {
  host: "smtp.gmail.com", // e.g. smtp.gmail.com
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
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

app.post("/send-email", function (req, res, next) {
  const mail = {
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

app.post("/pay", (req, res) => {
  const create_payment_json = {
    "intent": "SALE",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "Acces to bank",
          "sku": "Acces to bank",
          "price": "100",
          "currency": "USD",
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "USD",
        "total": "100"
      },
      "description": "Acces to 300 banks"
    }]
  };
  payPal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response.details)
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.send(payment.links[i].href)
        }
      }
    }
  });
});

app.get("/success", (req, res) => {
  const { PayerID, paymentId } = req.query;

  const execute_payment_json = {
    "payer_id": PayerID,
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": "100"
      }
    }]
  };

  payPal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
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
            filename: 'dos.docx',
            path: "https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx",
          }
        ],
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log({ ...err });
        };
      });
      res.status(200).json({ url: "https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx" })
      // res.download("https://res.cloudinary.com/dnpawq0kt/raw/upload/v1585126347/Feedback_on_6_December_2019_bj9lxb.docx", "dox.docx")
    }
  });
})