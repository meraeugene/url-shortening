import React, { useState } from "react";
import "./Shorten.css";
import Result from "../../Components/Result/Result";

const Shorten = () => {
  const [inputLinks, setInputLinks] = useState([]); // State variable to store inputted links
  const [shortenedLinks, setShortenedLinks] = useState([]); // State variable to store shortened links
  const [currentInputLink, setCurrentInputLink] = useState(""); // State variable to store the current input link

  const handleLinkInput = (e) => {
    setCurrentInputLink(e.currentTarget.value); // Update the current input link state
  };

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    shortenLink(currentInputLink); // Shorten the current input link
    setInputLinks([...inputLinks, currentInputLink]); // Add the current input link to the inputLinks state array
    setTimeout(() => {
      setCurrentInputLink(""); // Clear the input field after a short delay
    }, 100); // Adjust the delay time if needed
  };

  const shortenLink = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          result: { short_link },
        } = data;
        setShortenedLinks([...shortenedLinks, short_link]); // Add the shortened link to the shortenedLinks state array
      });
  };

  return (
    <>
      <div className="app__shorten">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleLinkInput}
          value={currentInputLink}
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
