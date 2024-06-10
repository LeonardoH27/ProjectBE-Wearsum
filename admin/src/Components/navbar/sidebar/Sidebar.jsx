import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import addproductlogo from "../../../assets/cart_icon.png"
import listproductlogo from "../../../assets/feature.png"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={"/addproduct"} style={{textDecoration:"none"}}>
            <div className="sidebaritem">
                <img src={addproductlogo} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={"/listproduct"} style={{textDecoration:"none"}}>
            <div className="sidebaritem">
                <img src={listproductlogo} alt="" />
                <p>All Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar