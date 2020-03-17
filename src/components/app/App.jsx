import React from "react";

import Header from "../header/header";
import About from "../about/about";
import BanderAdvisorOffer from "../banker-advisor-offer/BankerAdvisorOffer";

import "./app.css";
import GetBanks from "../get-banks/get-banks";
import Banks from "../banks/banks";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <BanderAdvisorOffer />
      <GetBanks />
      <Banks />
      <Footer />
    </div>
  );
}

export default App;
