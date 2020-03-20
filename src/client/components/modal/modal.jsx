/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

import "./modal.css";
import closeLogo from "./close.svg";
import GetListForm from "../get-list-input/get-list-form";

const ModalComponent = ({ isOpen, togglemodal }) => {
  const modalRef = useRef(null);
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [state, setState] = useState({
  //   userName: "",
  //   email: ""
  // });
  // const errMsg = (
  //   <p style={{ color: "#F43636" }}>
  //     Please enter a valid email (e.g. johnsmith@gmail.com )
  //   </p>
  // );
  // const successMsg = (
  //   <p>
  //     Success! Check your email for access to 1000 investment bankers in NYC.
  //   </p>
  // );

  // const handleChange = e => {
  //   let name = e.target.name;
  //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
  //     setError(true);
  //     setSuccess(false);
  //   } else {
  //     setError(false);
  //     setSuccess(true);
  //   }
  //   setState({
  //     ...state,
  //     [name]: e.target.value
  //   });
  // };

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
      // setState({});
      // setError(false);
      // setSuccess(false);
    };
  }, []);

  return (
    <Modal ariaHideApp={false} ref={modalRef} id="modal" isOpen={isOpen}>
      <div className="close-btn">
        <img
          onClick={() => togglemodal(false)}
          src={closeLogo}
          alt="close logo"
        />
      </div>
      <header>
        <h5>LET`S TALK!</h5>
        <p>
          A list of &nbsp;
          <b>Top 300 Investment Banks and M&A Advisors in New York City </b>
          hand-picked by Mike Casey, will help you make a wise investment
          decision. Receiving this list is easy – just discuss your banking &
          investment experience with our experts.
        </p>
        <p>If you would agree, please, leave your email below.</p>
      </header>
      <div>
        {/* <form autoComplete="off" autoSave="off"> */}
        <div className="modal-form-wrap">
          <GetListForm btnClass="blue-btn" />
          {/* <input
              required
              name="email"
              onChange={handleChange}
              className="input"
              placeholder="Enter your email "
              type="text"
            />
            <button className="button primary">Schedule a meeting</button> */}
        </div>
        {/* {error && errMsg} */}
        {/* {success && successMsg} */}
        {/* </form> */}
      </div>
    </Modal>
  );
};

export default ModalComponent;
