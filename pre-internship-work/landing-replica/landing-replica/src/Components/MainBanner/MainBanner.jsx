import React from "react";
import person from "../../images/person.webp";
import "./MainBanner.css";
const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="banner-heading">
        <div className="headline">Grow Faster, Go Global.</div>
        <div className="information">
          Strengthen your Supply Chain, and Scale your Business with Reliable
          Shipping and Cashflows.
        </div>
        <button className="get-started">Get Started</button>
      </div>
      <div className="banner-image">
        <img src={person} alt="cogo-person" className="person-image" />
      </div>
    </div>
  );
};

export default MainBanner;
