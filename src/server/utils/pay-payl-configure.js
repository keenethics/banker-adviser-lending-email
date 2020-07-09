const payPal = require("paypal-rest-sdk");

payPal.configure({
  mode: "sandbox", // sandbox or live
  client_id: "AbZWmbrDBXehpEh-uiYqjsOOUW7tGgbiB1xIhN6J6xGnpTr7J6_n2egBJPl-CXrO9AYz6x3BPjts2TdN",
  client_secret: "EHFg5QqoESFsfEk-ciFrfwE6enVD8y9pj3bZ_q3l5tjKrP2qwy3yJsHEZ6BNvm3FGEDi7xAQU6Pz5gHe",
});
