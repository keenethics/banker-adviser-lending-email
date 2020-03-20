import React from "react";

import "./footer.css";
import GetListForm from "../get-list-form/get-list-form";

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <h4>Meet the Other 297 Top NYC Investment Banks!</h4>
        <div className="footer-from-wrap">
          <GetListForm white btnClass="primary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
