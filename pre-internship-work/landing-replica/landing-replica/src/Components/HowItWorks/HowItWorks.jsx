import React from "react";
import discoverImage from "../../images/discover.png";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-title">How it Works</div>
      <div className="how-options">
        <div className="how-option">For Cogo Owners</div>
        <div className="how-option-2">For Logistics Partners</div>
      </div>
      <div className="how-grid">
        <div className="how-row border">
          <div className="how-card border">
            <div className="how-card-stage border">Stage 1:</div>
            <div className="how-card-title border">
              <img
                src={discoverImage}
                alt="discover"
                className="how-card-title-img"
              />
              <div className="how-card-title-text">Discover</div>
            </div>
            <ul className="how-card-points border">
              <li>Spot and Contract Rates for Logistics</li>
              <li>
                Service details, Trade Compliance/ Regulatory Requirements
              </li>
              <li>
                Knowledge and Insights on Trade, Logistics, Finance, Supply
                Chains
              </li>
            </ul>
          </div>
          <div className="how-card border">
            <div className="how-card-stage border">Stage 1:</div>
            <div className="how-card-title border">
              <img
                src={discoverImage}
                alt="discover"
                className="how-card-title-img"
              />
              <div className="how-card-title-text">Discover</div>
            </div>
            <ul className="how-card-points border">
              <li>Spot and Contract Rates for Logistics</li>
              <li>
                Service details, Trade Compliance/ Regulatory Requirements
              </li>
              <li>
                Knowledge and Insights on Trade, Logistics, Finance, Supply
                Chains
              </li>
            </ul>
          </div>
        </div>
        <div className="how-row border">
          <div className="how-card border">
            <div className="how-card-stage border">Stage 1:</div>
            <div className="how-card-title border">
              <img
                src={discoverImage}
                alt="discover"
                className="how-card-title-img"
              />
              <div className="how-card-title-text">Discover</div>
            </div>
            <ul className="how-card-points border">
              <li>Spot and Contract Rates for Logistics</li>
              <li>
                Service details, Trade Compliance/ Regulatory Requirements
              </li>
              <li>
                Knowledge and Insights on Trade, Logistics, Finance, Supply
                Chains
              </li>
            </ul>
          </div>
          <div className="how-card border">
            <div className="how-card-stage border">Stage 1:</div>
            <div className="how-card-title border">
              <img
                src={discoverImage}
                alt="discover"
                className="how-card-title-img"
              />
              <div className="how-card-title-text">Discover</div>
            </div>
            <ul className="how-card-points border">
              <li>Spot and Contract Rates for Logistics</li>
              <li>
                Service details, Trade Compliance/ Regulatory Requirements
              </li>
              <li>
                Knowledge and Insights on Trade, Logistics, Finance, Supply
                Chains
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
