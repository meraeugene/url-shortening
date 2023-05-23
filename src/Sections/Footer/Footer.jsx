import React from "react";
import "./Footer.css";
import logo from "../../images/logo-white.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import ig from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="app__footer">
      <footer>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="links">
          <div className="first-link">
            <span className="weight-700">Features</span>
            <span>Link Shortening</span>
            <span>Brand Links</span>
            <span>Analytics</span>
          </div>
          <div className="second-link">
            <span className="weight-700">Resources</span>
            <span>Blog </span>
            <span>Developers</span>
            <span>Support</span>
          </div>
          <div className="third-link">
            <span className="weight-700">Company</span>
            <span>About</span>
            <span>Our Team</span>
            <span>Careers</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="socials">
          <img src={fb} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={ig} alt="instagram" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
