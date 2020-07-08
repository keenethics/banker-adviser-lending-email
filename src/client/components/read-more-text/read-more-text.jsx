import React, { useState } from "react";

import "./read-more-text.css";

const ReadMoreText = ({ text }) => {
  const [showText, setShowText] = useState(false);
  const readOrClose = showText ? (
    <small
      className="read-more-text-show-all"
      role="presentation"
      onClick={() => setShowText(false)}
    >
      Hide
    </small>
  ) : (
    <small
      className="read-more-text-show-all"
      role="presentation"
      onClick={() => setShowText(true)}
    >
      Read more
    </small>
  );
  return (
    <p className="read-more-text">
      {showText ? text : `${text.slice(0, 115)}...`}
      {readOrClose}
    </p>
  );
};

export default ReadMoreText;
