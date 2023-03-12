import React from "react";
import "./Subscribe.css";
import subLogo from "../../images/cogoport-subscribe.png";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-img">
        <img src={subLogo} alt="subscribe" />
      </div>
      <div className="subscribe-text">
        <div className="subscribe-heading">
          Subscribe to our newsletter now!
        </div>
        <div className="subscribe-info">
          Don’t miss out on the latest happenings at Cogoport.
        </div>
        <div className="subscribe-form">
          <input
            type="email"
            name="email"
            id="email"
            className="email-input"
            placeholder="Enter your E-mail here"
          />
          <button className="sub-btn">Subscribe &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
