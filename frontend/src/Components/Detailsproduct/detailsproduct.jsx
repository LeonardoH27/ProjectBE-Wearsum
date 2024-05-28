import React from 'react'
import "./detailsproduct.css"
import arrow_icon1 from "../Assets/arrow_1.png"

const Detailsproduct = (props) => {
    const {product} = props;
  return (
    <div className='detailsproduct'>
        Home <img src={arrow_icon1} alt="" /> Shop <img src={arrow_icon1} alt="" />{product.category} <img src={arrow_icon1} alt="" />{product.name}
    </div>
  )
}

export default Detailsproduct