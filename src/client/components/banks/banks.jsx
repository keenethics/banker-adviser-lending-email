import React from "react";
import ReadMoreText from "../read-more-text/read-more-text";
import MobileBanks from "../banks-mobile/banks-mobile";

import logo1 from "./Blackstone.jpg";
import logo2 from "./Palazzo.png";
import logo3 from "./JPMorgan Chase & Co..png";
import "./banks.css";

const Banks = () => (
  <section id="banks-section">
    <div className="mobile-title">
      <h3 className="what-does-bankeradvisor-offer-mobile">
        What Does BankerAdvisor Offer?
      </h3>
    </div>

    <MobileBanks />

    <div className="banks">
      <div className="banks-wrap">
        <h3 className="what-does-bankeradvisor-offer-header">
          What Does BankerAdvisor Offer?
        </h3>
        <div className="bank">
          <div className="bank-logo">
            <img className="bank-logo-img" src={logo1} alt="bank logo" />
          </div>
          <div className="bank-description">
            <div className="bank-name">
              <h4 className="bank-name-header">Blackstone</h4>
              <div className="bank-name-website-link-wrapp">
                <a
                  className="bank-name-website-link"
                  href="https://www.blackstone.com/"
                >
                  blackstone.com
                </a>
              </div>
            </div>
            <div className="bank-industry-wrapp">
              <div className="bank-industry">
                <p className="bank-industry-services">
                  Private Equity, Real Estate Infrastructure, Innovations, Life
                  Sciences
                </p>
                <p className="bank-industry-employees">1,000-5,000 employees</p>
              </div>
              <ReadMoreText
                text="Blackstone is one of the world’s leading investment firms.
                  Asset management businesses, with $450 billion in assets under
                  management, include investment vehicles focused on private
                  equity, real estate, public debt and equity, non-investment
                  grade credit, real assets and secondary funds, all on a global
                  basis. Blackstone also provides various financial advisory
                  services, including financial and strategic advisory,
                  restructuring and reorganization advisory and fund placement
                  services."
              />
            </div>
            <div className="border-bottom" />
            <div className="connect-person">
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    Alexandra Hill, Sr. Managing Director
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:alexandra.hill@blackstone.com"
                  >
                    alexandra.hill@blackstone.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:alexandra.hill@blackstone.com"
                >
                  connect
                </a>
              </div>
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    Eli Nagler, Managing Director
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:eli.nagler@blackstone.com"
                  >
                    eli.nagler@blackstone.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:eli.nagler@blackstone.com"
                >
                  connect
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bank">
          <div className="bank-logo">
            <img className="bank-logo-img" src={logo2} alt="bank logo" />
          </div>
          <div className="bank-description">
            <div className="bank-name">
              <h4 className="bank-name-header">Palazzo</h4>
              <div className="bank-name-website-link-wrapp">
                <a
                  className="bank-name-website-link"
                  href="https://www.palazzonyc.com/"
                >
                  palazzonyc.com
                </a>
              </div>
            </div>
            <div className="bank-industry-wrapp">
              <div className="bank-industry">
                <p className="bank-industry-services">
                  Marketing, Media, Tech Infrastructure, Innovations, Life
                  Sciences
                </p>
                <p className="bank-industry-employees">11-50 employees</p>
              </div>
              <ReadMoreText
                text="PALAZZO is a New York City based investment bank that provides M&A advisory
                  and capital raising services to entrepreneurs/founders, private equity firms and strategic acquirers
                  in the marketing services, media, and technology sectors.
                  The firm is unique in its ability to offer a powerful combination
                  of investment banking and advisory services,
                  all designed to maximize value and wealth for its clients,
                  no matter where they are in their business lifecycle.
                  Founded in 2009, the firm has quickly grown into a leading investment bank
                  in the sectors it covers."
              />
            </div>
            <div className="border-bottom" />
            <div className="connect-person">
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    Peter Cosco, Managing Director
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:pcosco@palazzonyc.com"
                  >
                    pcosco@palazzonyc.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:pcosco@palazzonyc.com"
                >
                  connect
                </a>
              </div>
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    Matt Hasson, Managing Director
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:mhasson@palazzonyc.com"
                  >
                    mhasson@palazzonyc.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:mhasson@palazzonyc.com"
                >
                  connect
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bank">
          <div className="bank-logo">
            <img className="bank-logo-img" src={logo3} alt="bank logo" />
          </div>
          <div className="bank-description">
            <div className="bank-name">
              <h4 className="bank-name-header">JPMorgan Chase & Co.</h4>
              <div className="bank-name-website-link-wrapp">
                <a
                  className="bank-name-website-link"
                  href="https://www.jpmorganchase.com/"
                >
                  jpmorganchase.com
                </a>
              </div>
            </div>
            <div className="bank-industry-wrapp">
              <div className="bank-industry">
                <p className="bank-industry-services">Financial Services </p>
                <p className="bank-industry-employees">10,000+ employees</p>
              </div>
              <ReadMoreText
                text="For over 200 years, JPMorgan Chase & Co. has provided innovative financial
                  solutions for consumers, small businesses, corporations,
                  governments and institutions around the world.
                  Today, we're a leading global financial services firm with operations servicing clients in
                  more than 100 countries. Whether we are serving customers, helping small businesses, or putting our skills to work with partners,
                  we strive to identify issues and propose solutions that will propel
                  the future and strengthen both our clients and our communities."
              />
            </div>
            <div className="border-bottom" />
            <div className="connect-person">
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    David Disi, Chief Investment Officer
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:david@jpmorgan.com"
                  >
                    david@jpmorgan.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:david@jpmorgan.com"
                >
                  connect
                </a>
              </div>
              <div className="connect-person-item">
                <div className="connect-name-email-wrapp">
                  <p className="connect-person-name">
                    Andrea Stefanucci, Executive Director
                  </p>
                  <a
                    className="connect-person-email"
                    href="mailto:astefanucci@jpmorgan.com"
                  >
                    astefanucci@jpmorgan.com
                  </a>
                </div>
                <a
                  className="connect-person-link"
                  href="mailto:astefanucci@jpmorgan.com"
                >
                  connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banks;
