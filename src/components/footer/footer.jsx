import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <h4>Meet the Other 297 Top NYC Investment Banks!</h4>
        <input className="input" placeholder="Enter your email" type="text"/>
        <button className="button">GET THE LIST</button>
      </div>
    </footer>
  );
};

export default Footer;
