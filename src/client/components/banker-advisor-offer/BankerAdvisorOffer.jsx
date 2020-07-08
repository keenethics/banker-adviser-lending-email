import React from "react";

import "./banker-advisor-offer.css";
import logo1 from "./icon1.svg";
import logo2 from "./icon2.svg";
import logo3 from "./icon3.svg";

const bankerOfferItem = [
  {
    bankTitle: "Hand-picked database",
    text: `The list is hand-picked by experienced financial consultants — no
    scraping, no fillers, no ads. Receive the direct contact
    information.`,
    logo: logo1,
  },
  {
    bankTitle: "Access to decision-makers",
    text: `We offer you the contacts of people who represent the top 300
    investment banks in New York. Call them or email them to make an
    informed decision.`,
    logo: logo2,
  },
  {
    bankTitle: "Detailed banking information",
    text: `The list is concise but comprehensive — nothing extra but for the
    information you need. Learn how relevant a particular bank is to
    your needs.`,
    logo: logo3,
  },
];

const BanderAdvisorOffer = () => (
  <section id="banker-offer">
    <h3 className="banker-offer-title">What Does BankerAdvisor Offer?</h3>
    <div className="offers">
      {bankerOfferItem.map(({ bankTitle, text, logo }) => (
        <div className="offer-item">
          <div className="offer-item-logo">
            <img src={logo} alt="ofer item logo" />
          </div>
          <div className="offer-item-title">
            <h3>{bankTitle}</h3>
          </div>
          <div className="offer-item-text">
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BanderAdvisorOffer;
