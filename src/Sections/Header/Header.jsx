import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import menu from "../../images/menu-outline.svg";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <div className="app__header section__padding">
        <div className="app__header-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu-wrapper">
          <img
            src={menu}
            alt="menu"
            className="menu"
            onClick={handleToggleMenu}
          />
        </div>

        <nav className="app__header-links">
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#features">Pricing</a>
            </li>
            <li>
              <a href="#features">Resources</a>
            </li>
          </ul>
        </nav>

        <div className="app__header-login">
          <button type="button" className="login-button">
            Login
          </button>
          <button type="button" className="signup-button">
            Sign Up
          </button>
        </div>

        {toggleMenu && (
          <div className="small-screen-overlay">
            <nav className="app__header-smallscreen-links">
              <ul>
                <li onClick={handleToggleMenu}>
                  <a href="#features">Features</a>
                </li>
                <li onClick={handleToggleMenu}>
                  <a href="#features">Pricing</a>
                </li>
                <li onClick={handleToggleMenu}>
                  <a href="#features">Resources</a>
                </li>
              </ul>
            </nav>

            <div className="dash"></div>

            <div className="buttons">
              <button type="button">Login</button>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
