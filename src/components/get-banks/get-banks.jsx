import React from "react";

import "./get-banks.css";
import person from "./person.png";
import GetListInput from "../get-list-input/get-list-input";

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
                get the database <p>of the</p>{" "}
              </b>
            </p>
            <h3>Top 300 Investment Banks in New York </h3>
            <p>and their decision-makers. </p>

            <div class="share-banks-form">
              <GetListInput white />
              <button className="button primary">GET THE LIST</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetBanks;
