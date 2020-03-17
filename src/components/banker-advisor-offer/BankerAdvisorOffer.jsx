import React from "react";

import "./banker-advisor-offer.css";
import logo1 from "./icon1.svg";
import logo2 from "./icon2.svg";
import logo3 from "./icon3.svg";

const BanderAdvisorOffer = () => {
  return (
    <section id="banker-offer">
      <h3 class="banker-offer-title">What Does BankerAdvisor Offer?</h3>
      <div class="offers">
        <div class="offer-item">
          <div class="offer-item-logo">
            <img src={logo1} alt="ofer item logo" />
          </div>
          <div class="offer-item-title">
            <h3>
              Hand-picked <br />
              database
            </h3>
          </div>
          <div class="offer-item-text">
            <p>
              The list is hand-picked by experienced financial consultants — no
              scraping, no fillers, no ads. Receive the direct contact
              information.
            </p>
          </div>
        </div>
        <div class="offer-item">
          <div class="offer-item-logo">
            <img src={logo2} alt="ofer item logo" />
          </div>
          <div class="offer-item-title">
            <h3>Access to decision-makers</h3>
          </div>
          <div class="offer-item-text">
            <p>
              We offer you the contacts of people who represent the top 300
              investment banks in New York. Call them or email them to make an
              informed decision.
            </p>
          </div>
        </div>
        <div class="offer-item">
          <div class="offer-item-logo">
            <img src={logo3} alt="ofer item logo" />
          </div>
          <div class="offer-item-title">
            <h3>Detailed banking information</h3>
          </div>
          <div class="offer-item-text">
            <p>
              The list is concise but comprehensive — nothing extra but for the
              information you need. Learn how relevant a particular bank is to
              your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanderAdvisorOffer;
