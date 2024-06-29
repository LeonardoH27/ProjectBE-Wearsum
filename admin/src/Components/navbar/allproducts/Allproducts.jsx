import React, { useEffect, useState } from "react";
import "./Allproducts.css";
import Remove from "../../../assets/remove.png";

const Allproducts = () => {
  const [allproducts, setallproducts] = useState([]);

  const getallproducts = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setallproducts(data);
      });
  };

  useEffect(() => {
    getallproducts();
  }, []);

  const removeproduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    await getallproducts()
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert("Product removed successfully") : alert("Fail");
      });
  };
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="allproducts-main">
        <p>Products</p>
        <p>Title</p>
        <p>New Price</p>
        <p>Old Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listallproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div key={index} className="allproducts-main  allproduct-format">
              <img src={product.image} alt="" className="allproductimage" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => {
                  removeproduct(product.id);
                }}
                src={Remove}
                alt=""
                className="removeproduct"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allproducts;
