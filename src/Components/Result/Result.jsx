import React, { useState } from "react";
import "./Result.css";

const Result = ({ link, shortLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 500); // Reset the copied state after 0.5 seconds
      })
      .catch((error) => {
        console.log("Copy failed:", error);
      });
  };

  return (
    <div className="result">
      <div className="link">{link}</div>
      <div className="dash" />
      <div className="generated-link">
        <p>{shortLink}</p>
        <button className={isCopied ? "copied" : ""} onClick={handleCopy}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Result;
