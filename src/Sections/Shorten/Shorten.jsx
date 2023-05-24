import React, { useState } from "react";
import "./Shorten.css";
import Result from "../../Components/Result/Result";

const Shorten = () => {
  const [inputLinks, setInputLinks] = useState([]);
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [currentInputLink, setCurrentInputLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleLinkInput = (e) => {
    setCurrentInputLink(e.currentTarget.value);
    setErrorMessage("");
  };

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (isValidLink(currentInputLink)) {
      setIsLoading(true); // Start loading
      shortenLink(currentInputLink);
    } else {
      setCurrentInputLink("");
      setErrorMessage("Please enter a valid link");
    }
  };

  const isValidLink = (link) => {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(link);
  };

  const shortenLink = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          result: { short_link },
        } = data;
        setShortenedLinks([...shortenedLinks, short_link]);
        setInputLinks([...inputLinks, url]);
        setCurrentInputLink("");
        setErrorMessage("");
        setIsLoading(false); // Stop loading
      });
  };

  return (
    <>
      <div className="app__shorten">
        <input
          type="text"
          placeholder={
            errorMessage
              ? "Please enter a valid link"
              : "Shorten a link here..."
          }
          onChange={handleLinkInput}
          value={currentInputLink}
          className={errorMessage ? "error-input" : ""}
        />
        <button type="submit" onClick={handleLinkSubmit}>
          Shorten It!
        </button>
      </div>
      <div className="app__shorten-results">
        {inputLinks.map((inputLink, index) => (
          <Result
            key={index}
            link={inputLink}
            shortLink={shortenedLinks[index]}
          />
        ))}
      </div>
    </>
  );
};

export default Shorten;
