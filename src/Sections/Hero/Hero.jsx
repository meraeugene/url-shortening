import React from "react";
import "./Hero.css";
import heroimg from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="app__hero section__margin ">
      <div className="app__hero-content">
        <h1>More than just shorter links</h1>
        <h2>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>
        <button type="button" className="getStartedBtn">
          Get Started
        </button>
      </div>

      <div className="app__hero-img">
        <img src={heroimg} alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
