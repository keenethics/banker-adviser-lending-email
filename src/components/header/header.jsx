import React from "react";

import "./header.css";

import img from "./rectangle.jpg";
import logo from "./logo.png";

const Header = () => {
  return (
    <section class="intro">
      <div class="intro-left-wrap">
        <div class="intro-left">
          <div class="intro-logo">
            <a href="https://bankeradvisor.com/">
              <img src={logo} alt="banker left advisor logo" />
            </a>
          </div>
          <header>
            <h1>
              BankerAdvisor — <br />
              Your Financial Insider
            </h1>
            <p>Invest wisely.</p>
            <button className="button primary">Let`s talk</button>
          </header>
        </div>
      </div>
      <div class="intro-right">
        {/* <img src={img} alt="banker advisor right" /> */}
      </div>
    </section>
  );
};

export default Header;
