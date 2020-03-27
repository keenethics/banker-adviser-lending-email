import React from "react";

import "./get-banks.css";
import person from "./person.png";
import GetListInput from "../get-list-form/get-list-form";

const GetBanks = () => {
  return (
    <section>
      <div className="get-banks-wrap">
        <div className="get-banks">
          <div className="get-banks-person">
            <img src={person} alt="" />
          </div>
          <div className="share-banks">
            <p>
              Share your email to{" "}
              <b>
                {" "}
                get the database <span>of the</span>{" "}
              </b>
            </p>
            <h3>Top 300 Investment Banks in New York </h3>
            <p>and their decision-makers. </p>

            <div className="share-banks-form">
              <GetListInput white btnClass="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetBanks;
