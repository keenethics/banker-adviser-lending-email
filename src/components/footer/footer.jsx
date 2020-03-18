import React from "react";

import "./footer.css";
import GetListInput from "../get-list-input/get-list-input";

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <h4>Meet the Other 297 Top NYC Investment Banks!</h4>
        <div className="footer-from-wrap">
          <GetListInput white />
          <button className="button primary">GET THE LIST</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
