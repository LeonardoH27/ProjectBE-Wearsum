import React from "react";
import "./Updatenews.css";

const Updatenews = () => {
  return (
    <div className="updatenews">
      <h1>Get ready to discover all the trends!</h1>
      <p>Subscribe to our update news :D </p>
      <div>
        <input type="email" placeholder="E-mail" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Updatenews;
