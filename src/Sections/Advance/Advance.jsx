import React from "react";
import "./Advance.css";
import Card from "../../Components/Cards/Card";
import br from "../../images/icon-brand-recognition.svg";
import dr from "../../images/icon-detailed-records.svg";
import fc from "../../images/icon-fully-customizable.svg";

const Advance = () => {
  return (
    <div className="app__advance ">
      <div className="advance__text__center">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="cards">
        <Card
          img={br}
          title="Brand Recognition"
          info="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links can help instill confidence in your content"
        />
        <Card
          img={dr}
          title="Detailed Records"
          info="Gain insights into who is clicking your links. Knowing when and where people engage with your content help inform better decisions"
        />
        <Card
          img={fc}
          title="Fully Customizable"
          info="Improve brand awareness and content discoverability through customizable links, superchargin audience engagement."
        />
      </div>
    </div>
  );
};

export default Advance;
