import React from "react";
import "./Promotions.css";
import Imagepromotions from "../Assets/pngwing.com.png";
import check from "../Assets/check.png";

const Promotions = () => {
  return (
    <div className="promotions">
      <div className="promotions-left">
        <h1>Exclusive</h1>
        <h1>Promotions For You</h1>
        <p>TAKE ADVANTAGE OF FANTASTIC PROMOTIONS THIS WEEK</p>

        <div className="hero-latest-btn">
          <div>Check now</div>
          <img src={check} alt="" />
        </div>
      </div>
      <div className="promotions-right">
        <img src={Imagepromotions} alt="" />
      </div>
    </div>
  );
};

export default Promotions;
