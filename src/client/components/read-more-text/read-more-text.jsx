import React, { useState } from "react";

const ReadMoreText = ({ text }) => {
  const [showText, setShowText] = useState(false);
  const readOrClose = showText ? (
    <small onClick={() => setShowText(false)}>Hide</small>
  ) : (
    <small onClick={() => setShowText(true)}>Read more</small>
  );
  return (
    <p>
      {showText ? text.slice(0) : text.slice(0, 115) + "..."} {readOrClose}
    </p>
  );
};

export default ReadMoreText;
