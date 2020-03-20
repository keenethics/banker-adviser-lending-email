import React, { useState } from "react";
import { renderEmail } from "react-html-email";
import InlineLink from "../mail/mail";
import Axios from "axios";

import "./get-list-form.css";
import successIcon from "./success.svg";

const GetListForm = ({ white, btnClass }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  let [value, setValue] = useState("");
  let timerId = null;

  const messageHtml = renderEmail(<InlineLink name="Stepan" />);

  const handleSubmit = e => {
    e.preventDefault();
    if (error || loading) return;
    setLoading(true);
    Axios.post("/send-email", { value, messageHtml }).then(() => {
      clearTimeout(timerId);
      setLoading(false);
      setValue("");
      setSuccess(true);
      timerId = setTimeout(() => {
        setSuccess(false);
      }, 5000);
    });
  };

  const handleChange = e => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
    setValue(e.target.value);
  };

  const errMsg = (
    <p className="input-message" style={{ color: "#F43636" }}>
      Please enter a valid email (e.g. johnsmith@gmail.com )
    </p>
  );
  const successMsg = (
    <p style={{ color: white ? "#fff" : "#01216B" }} className="input-message">
      Success! Check your email for access to 1000 investment bankers in NYC.
    </p>
  );
  const btnMessage = loading ? (
    "loading"
  ) : success ? (
    <img src={successIcon} alt="success logo" />
  ) : (
    "GET THE LIST"
  );
  return (
    <React.Fragment>
      {error && errMsg}
      {success && successMsg}
      <form onSubmit={handleSubmit} id="get-list-form" autoComplete="off">
        <input
          value={value}
          required
          onChange={handleChange}
          className="input"
          placeholder="Enter your email "
          type="text"
        />
        <button className={`button ${btnClass}`}>{btnMessage}</button>
      </form>
    </React.Fragment>
  );
};

export default GetListForm;
