/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

import "./modal.css";
import closeLogo from "./close.svg";

const ModalComponent = ({ isOpen, togglemodal }) => {
  const modalRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({
    userName: "",
    email: ""
  });
  const errMsg = (
    <p style={{ color: "#F43636" }}>
      Please enter a valid email (e.g. johnsmith@gmail.com )
    </p>
  );
  const successMsg = (
    <p>
      Success! Check your email for access to 1000 investment bankers in NYC.
    </p>
  );

  const clickModalWhenClickOuter = e => {
    if (
      e.target.className ===
      "ReactModal__Overlay ReactModal__Overlay--after-open"
    ) {
      togglemodal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickModalWhenClickOuter);
    return () => {
      document.removeEventListener("click", clickModalWhenClickOuter);
      setState({});
      setError(false);
    };
  }, []);

  const handleChange = e => {
    let name = e.target.name;
    if (name === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setError(true);
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
      }
    }
    setState({
      ...state,
      [name]: e.target.value
    });
  };
  return (
    <Modal ref={modalRef} ariaHideApp={false} id="modal" isOpen={isOpen}>
      <div className="close-btn">
        <img
          onClickCapture={() => togglemodal(false)}
          src={closeLogo}
          alt="close logo"
        />
      </div>
      <h5>
        Enter your email to get direct access to 1000 investment bankers in NYC.
      </h5>
      <div>
        <form autoComplete="off">
          <div className="modal-form-wrap">
            <input
              required
              name="userName"
              className="input"
              onChange={handleChange}
              placeholder="Enter your name"
              type="text"
            />
            <input
              required
              name="email"
              onChange={handleChange}
              className="input"
              placeholder="Enter your email "
              type="text"
            />
            {error && errMsg}
            {success && successMsg}
            <button className="button blue-btn">GET THE LIST</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalComponent;
