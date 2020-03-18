import React, { useState } from "react";

import "./get-list-input.css";

const GetListInput = ({ white }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  let [value, setValue] = useState("");


  const handleChange = e => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setError(true);
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
      }
    setValue(e.target.value)
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
  return (
    <React.Fragment>
      {error && errMsg}
      {success && successMsg}
      <input onChange={handleChange} className="input" placeholder="Enter your email " type="text" />
    </React.Fragment>
  );
};

export default GetListInput;
