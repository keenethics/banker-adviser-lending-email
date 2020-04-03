import React, { useState } from "react";

// import { renderEmail } from "react-html-email";
import Header from "../header/header";
import About from "../about/about";
import BanderAdvisorOffer from "../banker-advisor-offer/BankerAdvisorOffer";
import GetBanks from "../get-banks/get-banks";
import Banks from "../banks/banks";
import Footer from "../footer/footer";
// import InlineLink from "../mail/mail";
import ModalComponent from "../modal/modal";

import "./app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglemodal = (toggler) => {
    setIsOpen(toggler);
  };

  // const messageHtml = renderEmail(<InlineLink name="Stepan" />);


  // useEffect(() => {
  //   const parseParams = qs.parse(window.location.search);
  //   if (!parseParams.PayerID || !parseParams.paymentId || !parseParams.token) return;
  //   // setIsOpen(true)
  //   Axios.get('/success', { params: { ...parseParams, messageHtml } }).then(res => {
  //     const link = document.createElement('a');
  //     link.href = res.data.url;
  //     link.style.display = "none"
  //     link.setAttribute('download', 'file.docx');
  //     document.body.appendChild(link);
  //     window.history.pushState("home", "Banker Adviser", "/")
  //     setTimeout(() => {
  //       link.click();
  //     }, 3000);
  //   })
  // }, []);

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
