import React from "react";
import fcl from "../../images/fcl.png";
import "./Products.css";
const Products = () => {
  return (
    <div className="products">
      <div className="products-heading">Our Products</div>
      <div className="end-to-end product-section">
        <div className="product-section-text">
          End to End Cross Border Logistics
        </div>
        <div className="product-section-cards">
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
        </div>
      </div>
      <div className="domestic product-section">
        <div className="product-section-text">Domestic Logistics</div>
        <div className="product-section-cards">
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
        </div>
      </div>
      <div className="supply-chains product-section">
        <div className="product-section-text">Supply Chain Solutions</div>
        <div className="product-section-cards">
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
        </div>
      </div>
      <div className="financial-services product-section">
        <div className="product-section-text">Financial Services</div>
        <div className="product-section-cards">
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
          <div className="card">
            <img src={fcl} alt="fcl" className="card-image" />
            <div className="card-text">Find-Out-More &gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
