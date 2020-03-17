import React from "react";

import "./about.css";
import person from "./Casey.png"
import svg from "./Vector.svg"

const About = () => {
  return (
    <section id="about">
      <div class="about-wrap">
      <div class="about-description">
          <div class="about-logo">
            <img src={person} alt="Mike Casey" />
          </div>
          <div class="about-partner-wrap">
            <div class="about-name">
              <h2>Mike Casey</h2>
            </div>
            <p className="about-partner">
              Partner, Executive Committee
              Member TechCXO
            </p>
          </div>
        </div>
        <div class="about-text">
          <p>
            It is always a good idea to make banking and financial decisions
            with the trust and confidence of peer reviews.
          </p>
          <p>
            Talk to the best investment bankers in New York to get a
            professional opinion on financial decisions
          </p>
          <p>
            The list of bankers is provided to you by Mike Casey, an investment
            banker with 30 years of experience.
          </p>
        </div>
        <div className="about-svg">
          <img src={svg} alt="svg logo"/>
        </div>
      </div>
      <div class="meet-banks-wrap">
        <div class="meet-banks">
          <h2>
            Meet the Top 300 Investment Banks and
            M&A Advisors in NYC!
          </h2>
          <p>Learn how relevant a particular bank is to your needs.</p>
        </div>
      </div>
      <div class="get-list-wrap">
        <div class="get-list">
          <input className="input" placeholder="Enter your email " type="text" />
          <button className="button">GET THE LIST</button>
        </div>
      </div>
    </section>
  );
};

export default About;
