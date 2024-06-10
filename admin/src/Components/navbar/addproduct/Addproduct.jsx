import React, { useState } from "react";
import "./Addproduct.css";
import Upload from "../../../assets/upload.png";

const Addproduct = () => {
  const imageH = (e) => {
    setImage(e.target.files[0]);
  };
  const changeH = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added successfully") : alert("Fail");
        });
    }
  };
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "",
    image: "",
  });

  return (
    <div className="addproduct">
      <div className="addproduct-item">
        <p>Product</p>
        <input
          value={productDetails.name}
          onChange={changeH}
          type="text"
          name="name"
          placeholder="Type It"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-item">
          <p>Old Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeH}
            type="text"
            name="old_price"
            placeholder="Type It"
          />
        </div>
        <div className="addproduct-item">
          <p>New Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeH}
            type="text"
            name="new_price"
            placeholder="Type It"
          />
        </div>
      </div>
      <div className="addproduct-item">
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeH}
          name="category"
          className="addproductselect"
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-item">
        <label htmlFor="file">
          <img
            src={image ? URL.createObjectURL(image) : Upload}
            className="upload-image"
          />
        </label>
        <input onChange={imageH} type="file" name="image" id="file" hidden />
      </div>
      <button
        onClick={() => {
          Add_product();
        }}
        className="addproductbutton"
      >
        Add Product
      </button>
    </div>
  );
};

export default Addproduct;
