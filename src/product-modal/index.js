import React from "react";
import HeadphoneImage from "./assets/img/headphone.png";
import './index.css';

const ProductModal = () => {
  return (
    <div className="main">
      <div className="main-div">
        <div className="flex justify-center">
          {/* Headphone image */}
          <img
            src={HeadphoneImage}
            className="headphone-image"
          />
        </div>
        <div>
          {/* Free shipping logo */}
          <p className="free-shipping-logo">
            Free Shipping
          </p>
          {/* Product Name */}
          <p className="product-name">
            Razen Kraken Kitty Edt Gaming Headset Quartz
          </p>
          {/* striked out price */}
          <p className="main-price">$799</p>
          {/* actual price */}
          <p className="discount-price">$599</p>
          {/* discount statement */}
          <p className="offer-statement">The offer is valid until April 3 or as long as stock lasts!</p>
          <div className="button-div">
            <button className="button-addToCart">Add to Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
