import React from "react";
import Slider from "react-slick";
import ReadMoreText from "../read-more-text/read-more-text";

import logo1 from "../banks/Blackstone.jpg";
import logo2 from "../banks/Palazzo.png";
import logo3 from "../banks/JPMorgan Chase & Co..png";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MobileBanks = () => (
  <div className="mobile-bank-wrap">
    <Slider {...settings}>
      <div className="mobile-bank">
        <div className="mobile-bank-header">
          <div className="mobile-logo">
            <img className="mobile-logo-img" src={logo1} alt="" />
          </div>
          <div className="mobile-link-wrapp">
            <a className="mobile-link" href="https://www.blackstone.com/">
              blackstone.com
            </a>
          </div>
        </div>
        <div className="mobile-title">
          <h4>Blackstone</h4>
        </div>
        <div className="mobile-industry">
          <p className="mobile-industry-services">
            Private Equity, Real Estate Infrastructure, Innovations, Life
            Sciences
          </p>
          <p className="mobile-industry-employees">1,000-5,000 employees</p>
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

        <div className="border-bottom" />

        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              Alexandra Hill, Sr. Managing Director
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:alexandra.hill@blackstone.com"
            >
              connect
            </a>
          </div>
          <a
            className="connect-name-emali"
            href="mailto:alexandra.hill@blackstone.com"
          >
            alexandra.hill@blackstone.com
          </a>
        </div>
        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              Eli Nagler, Managing Director
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:eli.nagler@blackstone.com"
            >
              connect
            </a>
          </div>
          <a
            className="connect-name-email"
            href="mailto:eli.nagler@blackstone.com"
          >
            eli.nagler@blackstone.com
          </a>
        </div>
      </div>
      <div className="mobile-bank">
        <div className="mobile-bank-header">
          <div className="mobile-logo">
            <img className="mobile-logo-img" src={logo2} alt="" />
          </div>
          <div className="mobile-link">
            <a href="http://palazzonyc.com/">palazzonyc.com</a>
          </div>
        </div>
        <div className="mobile-title">
          <h4>Palazzo</h4>
        </div>
        <div className="mobile-industry">
          <p className="mobile-industry-services">
            Marketing, Media, Tech Infrastructure, Innovations, Life Sciences
          </p>
          <p className="mobile-industry-employees">11-50 employees</p>
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

        <div className="border-bottom" />

        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              Peter Cosco, Managing Director
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:pcosco@palazzonyc.com"
            >
              connect
            </a>
          </div>
          <a
            className="connect-name-email"
            href="mailto:pcosco@palazzonyc.com"
          >
            pcosco@palazzonyc.com
          </a>
        </div>
        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              Matt Hasson, Managing Director
              {" "}
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:mhasson@palazzonyc.com"
            >
              connect
            </a>
          </div>
          <a
            className="connect-name-email"
            href="mailto:mhasson@palazzonyc.com"
          >
            mhasson@palazzonyc.com
          </a>
        </div>
      </div>
      <div className="mobile-bank">
        <div className="mobile-bank-header">
          <div className="mobile-logo">
            <img className="mobile-logo-img" src={logo3} alt="" />
          </div>
          <div className="mobile-link-wrapp">
            <a className="mobile-link" href="https://www.jpmorganchase.com/">
              jpmorganchase.com
            </a>
          </div>
        </div>
        <div className="mobile-title">
          <h4>JPMorgan Chase & Co.</h4>
        </div>
        <div className="mobile-industry">
          <p className="mobile-industry-services">Financial Services</p>
          <p className="mobile-industry-employees">10,000+ employees</p>
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

        <div className="border-bottom" />

        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              David Disi, Chief Investment Officer
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:david@jpmorgan.com"
            >
              connect
            </a>
          </div>
          <a className="connect-name-email" href="mailto:david@jpmorgan.com">
            david@jpmorgan.com
            {" "}
          </a>
        </div>
        <div className="connect-mail">
          <div className="connect-name">
            <h5 className="connect-name-header">
              Andrea Stefanucci, Executive Director
            </h5>
            <a
              className="connect-name-email-link"
              href="mailto:astefanucci@jpmorgan.com"
            >
              connect
            </a>
          </div>
          <a
            className="connect-name-email"
            href="mailto:astefanucci@jpmorgan.com"
          >
            astefanucci@jpmorgan.com
          </a>
        </div>
      </div>
    </Slider>
  </div>
);

export default MobileBanks;
