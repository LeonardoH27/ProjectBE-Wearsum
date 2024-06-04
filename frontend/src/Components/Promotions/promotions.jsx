import React from "react";
import "./Promotions.css";
import Imagepromotions from "../Assets/pngwing.com.png";

const Promotions = () => {
  return (
    <div className="promotions">
      <div className="promotions-left">
        <h1>Exclusive</h1>
        <h1>Promotions For You</h1>
        <p>TAKE ADVANTAGE OF FANTASTIC PROMOTIONS THIS WEEK</p>
        <button>Check Now</button>
      </div>
      <div className="promotions-right">
        <img src={Imagepromotions} alt="" />
      </div>
    </div>
  );
};

export default Promotions;
