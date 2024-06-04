import React, { useContext } from "react";
import "./CSS/shopcategory.css";
import { shopcontext } from "../Context/shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/items/Item";

const Shopcategory = (props) => {
  const { all_product } = useContext(shopcontext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-8</span> out of 26 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default Shopcategory;
