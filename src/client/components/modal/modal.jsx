/* eslint-disable no-undef */
import React, { useEffect } from "react";
import Modal from "react-modal";

import "./modal.css";
import closeLogo from "./close.svg";
import GetListForm from "../get-list-form/get-list-form";

const ModalComponent = ({ isOpen, togglemodal }) => {
  const closeModalWhenClickOuter = (e) => {
    console.log("hello");
    if (
      e.target.className
      === "ReactModal__Overlay ReactModal__Overlay--after-open"
    ) {
      togglemodal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeModalWhenClickOuter);
    return () => {
      document.removeEventListener("click", closeModalWhenClickOuter);
      // setState({});
      // setError(false);
      // setSuccess(false);
    };
  }, []);

  return (
    <Modal ariaHideApp={false} id="modal" isOpen={isOpen}>
      <div className="close-btn">
        <img
          role="presentation"
          onClick={() => togglemodal(false)}
          src={closeLogo}
          alt="close logo"
        />
      </div>
      <header>
        <h5>LET`S TALK!</h5>
        <span>To help you make a wise investment decision, here is what we offer:</span>
        <p>
          A list of &nbsp;
          A list of
          {" "}
          <b> Top 300 Investment Banks and M&A Advisors in New York City </b>
          hand-picked by Mike Casey, an expert in Banking & Investment
          with over 30 years of experience in the field.
        </p>
        <p>Please, leave your email below.</p>
      </header>
      <div className="form-container">
        <div className="modal-form-wrap">
          <GetListForm btnClass="blue-btn" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
