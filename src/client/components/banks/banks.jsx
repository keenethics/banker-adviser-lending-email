import React from "react";
import Slider from "react-slick";
import ReadMoreText from "../read-more-text/read-more-text";

import "./banks.css";
import logo1 from "./Blackstone.jpg";
import logo2 from "./Palazzo.png";
import logo3 from "./JPMorgan Chase & Co..png";

const Banks = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="banks-section">
      <div className="mobile-title">
        <h3>What Does BankerAdvisor Offer?</h3>
      </div>
      <div className="mobile-bank-wrap">
        <Slider {...settings}>
          <div className="mobile-bank">
            <div className="mobile-bank-header">
              <div className="mobile-logo">
                <img src={logo1} alt="" />
              </div>
              <div className="mobile-link">
                <a href="https://www.blackstone.com/">blackstone.com</a>
              </div>
            </div>
            <div className="mobile-title">
              <h4>Blackstone</h4>
            </div>
            <div className="mobile-industry">
              <p>
                Private Equity, Real Estate Infrastructure, Innovations, Life
                Sciences
              </p>
              <p>1,000-5,000 employees</p>
            </div>
            <div className="mobile-text">
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
            {/* <small>Read more</small> */}

            <div className="border-bottom"></div>

            <div className="connect-mail">
              <div className="connect-name">
                <h5>Alexandra Hill, Sr. Managing Director</h5>
                <p>connect</p>
              </div>
              <p>alexandra.hill@blackstone.com </p>
            </div>
            <div className="connect-mail">
              <div className="connect-name">
                <h5>Eli Nagler, Managing Director </h5>
                <p>connect</p>
              </div>
              <p>eli.nagler@blackstone.com</p>
            </div>
          </div>
          <div className="mobile-bank">
            <div className="mobile-bank-header">
              <div className="mobile-logo">
                <img src={logo2} alt="" />
              </div>
              <div className="mobile-link">
                <a href="http://palazzonyc.com/">palazzonyc.com</a>
              </div>
            </div>
            <div className="mobile-title">
              <h4>Palazzo</h4>
            </div>
            <div className="mobile-industry">
              <p>
                Marketing, Media, Tech Infrastructure, Innovations, Life
                Sciences
              </p>
              <p>11-50 employees</p>
            </div>
            <div className="mobile-text">
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
            {/* <small>Read more</small> */}

            <div className="border-bottom"></div>

            <div className="connect-mail">
              <div className="connect-name">
                <h5>Peter Cosco, Managing Director</h5>
                <p>connect</p>
              </div>
              <p>pcosco@palazzonyc.com</p>
            </div>
            <div className="connect-mail">
              <div className="connect-name">
                <h5>Matt Hasson, Managing Director </h5>
                <p>connect</p>
              </div>
              <p>mhasson@palazzonyc.com</p>
            </div>
          </div>
          <div className="mobile-bank">
            <div className="mobile-bank-header">
              <div className="mobile-logo">
                <img src={logo3} alt="" />
              </div>
              <div className="mobile-link">
                <a href="https://www.jpmorganchase.com/">jpmorganchase.com</a>
              </div>
            </div>
            <div className="mobile-title">
              <h4>JPMorgan Chase & Co.</h4>
            </div>
            <div className="mobile-industry">
              <p>Financial Services</p>
              <p>10,000+ employees</p>
            </div>
            <div className="mobile-text">
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
            {/* <small>Read more</small> */}

            <div className="border-bottom"></div>

            <div className="connect-mail">
              <div className="connect-name">
                <h5>David Disi, Chief Investment Officer</h5>
                <p>connect</p>
              </div>
              <p>david@jpmorgan.com </p>
            </div>
            <div className="connect-mail">
              <div className="connect-name">
                <h5>Andrea Stefanucci, Executive Director</h5>
                <p>connect</p>
              </div>
              <p>astefanucci@jpmorgan.com</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className="banks">
        <div className="banks-wrap">
          <h3>What Does BankerAdvisor Offer?</h3>
          <div className="bank">
            <div className="bank-logo">
              <img src={logo1} alt="bank logo" />
            </div>
            <div className="bank-description">
              <div className="bank-name">
                <h4>Blackstone</h4>
                <div>
                  <a href="https://www.blackstone.com/">blackstone.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>
                    Private Equity, Real Estate Infrastructure, Innovations,
                    Life Sciences
                  </p>
                  <p>1,000-5,000 employees</p>
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
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>Alexandra Hill, Sr. Managing Director</p>
                    <p>alexandra.hill@blackstone.com</p>
                  </div>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>Eli Nagler, Managing Director</p>
                    <p>eli.nagler@blackstone.com</p>
                  </div>
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
                <h4>Palazzo</h4>
                <div>
                  <a href="https://www.palazzonyc.com/">palazzonyc.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>
                    Marketing, Media, Tech Infrastructure, Innovations, Life
                    Sciences
                  </p>
                  <p>11-50 employees</p>
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
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>Peter Cosco, Managing Director</p>
                    <p>pcosco@palazzonyc.com</p>
                  </div>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>Matt Hasson, Managing Director</p>
                    <p>mhasson@palazzonyc.com </p>
                  </div>
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
                <h4>JPMorgan Chase & Co.</h4>
                <div>
                  <a href="https://www.jpmorganchase.com/">jpmorganchase.com</a>
                </div>
              </div>
              <div className="bank-industry">
                <div>
                  <p>Financial Services </p>
                  <p>10,000+ employees</p>
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
              <div className="border-bottom"></div>
              <div className="connect-person">
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>David Disi, Chief Investment Officer</p>
                    <p>david@jpmorgan.com</p>
                  </div>
                  <p>connect</p>
                </div>
                <div className="connect-person-item">
                  <div className="connect-name-email">
                    <p>Andrea Stefanucci, Executive Director</p>
                    <p>astefanucci@jpmorgan.com</p>
                  </div>
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
