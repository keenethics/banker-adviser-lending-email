import React from "react";

import "./header.css";

import logo from "./banker-logo.svg";

const Header = ({ togglemodal }) => {
  function openInNewTab() {
    // eslint-disable-next-line no-undef
    window.open("https://bankeradvisor.com/", "_blank");
  }

  return (
    <section className="intro">
      <div className="intro-left-wrap">
        <div className="intro-left">
          <div className="intro-logo">
            <img
              role="presentation"
              onClick={openInNewTab}
              src={logo}
              alt="banker left advisor logo"
            />
          </div>
          <header>
            <h1>
              BankerAdvisor —
              <br />
              Your Financial Insider
            </h1>
            <p>Invest wisely.</p>
            <button type="button" onClick={() => togglemodal(true)} className="button primary">Let`s talk</button>
          </header>
        </div>
      </div>
      <div className="intro-right">
        {/* <img src={img} alt="banker advisor right" /> */}
      </div>
    </section>
  );
};

export default Header;
