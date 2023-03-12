import React from "react";
import "./ServedIndustries.css";
import img from "../../images/industries-served.png";
const Servedindustries = () => {
  return (
    <div className="served-industries">
      <img src={img} alt="industries-served" className="industries-served" />
    </div>
  );
};

export default Servedindustries;
