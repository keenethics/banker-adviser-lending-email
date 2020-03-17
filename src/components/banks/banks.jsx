import React from "react";

import "./banks.css";
import logo1 from "./image10.png";
import logo2 from "./image11.png";
import logo3 from "./image12.png";

const Banks = () => {
  return (
    <section>
      <div className="banks">
        <div className="banks-wrap">
          <h3>What Does BankerAdvisor Offer?</h3>
          <div className="bank">
            <div className="bank-logo">
              <img src={logo1} alt="bank logo" />
            </div>
            <div className="bank-description">
              <div className="bank-name">
                <h4>JP Morgan Chase</h4>
                <div>
                  <a href="jpmorganchase.com">jpmorganchase.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>Industry</p>
                  <p>Bank size</p>
                </div>
                <p>
                  JPMorgan Chase (NYSE: JPM) is one of the oldest financial
                  institutions in the United States. With a history dating back
                  over... <small>Read more</small>
                </p>
              </div>
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bank">
            <div className="bank-logo">
              <img src={logo2} alt="bank logo" />
            </div>
            <div className="bank-description">
              <div className="bank-name">
                <h4>Goldman Sachs</h4>
                <div>
                  <a href="jpmorganchase.com">goldmansachs.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>Industry</p>
                  <p>Bank size</p>
                </div>
                <p>
                  JPMorgan Chase (NYSE: JPM) is one of the oldest financial
                  institutions in the United States. With a history dating back
                  over... <small>Read more</small>
                </p>
              </div>
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bank">
            <div className="bank-logo">
              <img src={logo3} alt="bank logo" />
            </div>
            <div className="bank-description">
              <div className="bank-name">
                <h4>Morgan Stanley</h4>
                <div>
                  <a href="jpmorganchase.com">morganchase.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>Industry</p>
                  <p>Bank size</p>
                </div>
                <p>
                  JPMorgan Chase (NYSE: JPM) is one of the oldest financial
                  institutions in the United States. With a history dating back
                  over... <small>Read more</small>
                </p>
              </div>
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <p>Marvin Hogan</p>
                  <p>mhogan@morganchase.com</p>
                  <p>connect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banks;