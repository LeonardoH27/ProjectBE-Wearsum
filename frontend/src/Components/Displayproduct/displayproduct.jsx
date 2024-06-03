import React, { useContext } from 'react'
import "./displayproduct.css"
import Star2 from "../Assets/star_2.png"
import Star1 from "../Assets/star_1.png"
import { shopcontext } from '../../Context/shopcontext'

const Displayproduct = (props) => {
    const{product} = props;
    const {addToCart} = useContext(shopcontext);
  return (
    <div className='displayproduct'>
        <div className="display-left">
          <div className="displayimage-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="displayimage">
            <img className= "displaymainimage"src={product.image} alt="" />

          </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="productclassification">
                <img src={Star2} alt="" />
                <img src={Star2} alt="" />
                <img src={Star2} alt="" />
                <img src={Star1} alt="" />
                <img src={Star1} alt="" />
                <p>(450)</p>
            </div>
            
            <div className="rightprices">
                <div className="rightpricesold">${product.old_price}
                <div className="rightpricesnew">${product.new_price}
                </div>
                <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
                <div className="displaybutton">
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    </div>
                <div className="productcategorymain">
                    <p className='productcategory'><span>Category :</span>Women, T-shirt, Crop Top</p>
                    <p className='productcategory'><span>Tags :</span>Latest</p>
                </div>
                
                </div>
                </div>

            </div>

        </div>
    
    
  )
}

export default Displayproduct