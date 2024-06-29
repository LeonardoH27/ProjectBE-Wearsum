import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/navbar/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/navbar/addproduct/Addproduct";
import AllProduct from "../../Components/navbar/allproducts/Allproducts";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<AllProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
