/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import Header from "../header/header";
import About from "../about/about";
import BanderAdvisorOffer from "../banker-advisor-offer/BankerAdvisorOffer";
import GetBanks from "../get-banks/get-banks";
import Banks from "../banks/banks";
import Footer from "../footer/footer";
import ModalComponent from "../modal/modal";

import "./app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglemodal = toggler => {
    setIsOpen(toggler);
  };
  console.log(isOpen);
  return (
    <div className="container">
      <ModalComponent isOpen={isOpen} togglemodal={togglemodal} />
      <Header togglemodal={togglemodal} />
      <About />
      <BanderAdvisorOffer />
      <GetBanks />
      <Banks />
      <Footer />
    </div>
  );
}

export default App;
