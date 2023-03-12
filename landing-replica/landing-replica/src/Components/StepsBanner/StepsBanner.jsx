import React from "react";
import "./StepsBanner.css";
import supplyChainMap from "../../images/map-supply-chain.png";
const StepsBanner = () => {
  return (
    <div className="steps-banner">
      <div className="banner-text">
        <div className="banner-heading">
          One Stop Solution for Your Supply Chain
        </div>
        <div className="banner-info">
          Connected Shipping, Finance, and Trade-tech, to Power Global Trade and
          Supply Chains.
        </div>
      </div>
      <div className="banner-image">
        <img
          src={supplyChainMap}
          alt="supply-chain-map"
          className="supply-banner-image"
        />
      </div>
    </div>
  );
};

export default StepsBanner;
