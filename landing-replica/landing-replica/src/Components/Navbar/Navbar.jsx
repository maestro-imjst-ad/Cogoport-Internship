import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img id="logo-image" src={logo} alt="cogoport" />
        </div>
        <div className="options ">
          <ul className="options-list">
            <li>Products</li>
            <li>Partners</li>
            <li>Company</li>
            <li>Knowledge Center</li>
            <li>Contact Us </li>
          </ul>
        </div>
        <div className="login-signup ">
          <div className="login">
            <span id="login-icon">😊</span>login
          </div>
          <div className="signup ">
            <span className="signup-button">Sign-Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
