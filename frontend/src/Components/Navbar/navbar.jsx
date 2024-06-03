import React, { useContext } from 'react'
import "./navbar.css"
import logo from "../Assets/wearsum.png"
import carticon from "../Assets/cart_icon.png"
import { useState } from'react'
import { Link } from'react-router-dom'
import { shopcontext } from '../../Context/shopcontext'

const Navbar = () => {  

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(shopcontext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: "none" }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: "none" }} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: "none" }} to="women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kid")}}><Link style={{ textDecoration: "none" }} to='/kid'>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={carticon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}


export default Navbar