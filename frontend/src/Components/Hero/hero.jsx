import React from "react";
import "./Hero.css";
import smile from "../Assets/smile.png";
import modelo1 from "../Assets/modelo1.png";
import tshirt from "../Assets/tshirt.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEWS SOON</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New Collection</p>
            <img src={smile} alt="" />
          </div>
          <p>From July 1, 2025</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={tshirt} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={modelo1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
