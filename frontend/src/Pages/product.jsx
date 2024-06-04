import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopcontext } from "../Context/shopcontext";
import Detailsproduct from "../Components/detailsproduct/Detailsproduct";
import Displayproduct from "../Components/displayproduct/Displayproduct";
import Relatedproduct from "../Components/relatedproduct/Relatedproduct";

const Product = () => {
  const { all_product } = useContext(shopcontext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Detailsproduct product={product} />
      <Displayproduct product={product} />
      <Relatedproduct />
    </div>
  );
};

export default Product;
