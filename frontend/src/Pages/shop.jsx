import React from "react";
import Hero from "../Components/hero/Hero";
import Emphasis from "../Components/emphasis/Emphasis";
import Promotions from "../Components/promotions/Promotions";
import Newcollection from "../Components/newcollection/Newcollection";
import Updatenews from "../Components/updatenews/Updatenews";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Emphasis />
      <Promotions />
      <Newcollection />
      <Updatenews />
    </div>
  );
};

export default Shop;
