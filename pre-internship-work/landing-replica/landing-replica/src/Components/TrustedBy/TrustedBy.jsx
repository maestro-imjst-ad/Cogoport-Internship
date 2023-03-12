import React from "react";
import "./TrustedBy.css";
import aisLogo from "../../images/ais-logo-1.webp";
import airAsialogo from "../../images/air-asia-logo-1.webp";
import bombayLogo from "../../images/bombay-dyeing-logo-1.webp";
import jsWLogo from "../../images/jsw-logo-new.webp";
import tvsLogo from "../../images/tvs-logo-1.webp";
import voltasLogo from "../../images/voltas-logo-1.webp";
const TrustedBy = () => {
  return (
    <div className="trusted-by">
      <div className="trusted-title">Trusted by</div>
      <div className="brands-images-container">
        <img src={airAsialogo} alt="air-asia" className="brand-image" />

        <img src={aisLogo} alt="ais-logo" className="brand-image" />

        <img src={bombayLogo} alt="bombay-dye" className="brand-image" />

        <img src={jsWLogo} alt="jsw" className="brand-image" />

        <img src={tvsLogo} alt="tvs" className="brand-image" />

        <img src={voltasLogo} alt="voltas" className="brand-image" />
      </div>
    </div>
  );
};

export default TrustedBy;
