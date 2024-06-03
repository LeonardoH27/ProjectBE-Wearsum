import React, { useContext } from 'react'
import './cart.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { shopcontext } from '../../Context/shopcontext';

const Cartmain = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(shopcontext);
  return (
    <div className='cartmain'>
      <div className="cartmain-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
                        <div className="cartmain-format cartmain-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartmain-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartmain-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
      })}
      <div className="cartmain-down">
        <div className="cartmain-total">
            <h1> Cart Total</h1>
            <div>
                <div className="cartmain-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartmain-total-item">
                    <p>Shipping </p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartmain-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartmain-promocode">
            <p>If you have a promo code?</p>
            <div className="cartmain-promobox">
                <input type="text" placeholder='Promo Code' />
                <button>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartmain
