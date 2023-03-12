import React from "react";
import "./Stats.css";
const Stats = () => {
  return (
    <div className="stats">
      <div className="countries">
        <div className="stat">149+</div>
        Countries Served
      </div>
      <div className="ports">
        <div className="stat">8,000</div>
        8,000 Port Pairs Served
      </div>
      <div className="tons">
        <div className="stat">2,500</div>
        Tons Of Air Cargo Moved
      </div>
      <div className="TEU">
        <div className="stat">500,000</div>
        TEU's Sold
      </div>
    </div>
  );
};

export default Stats;
