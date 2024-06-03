import React from 'react'
import "./relatedproduct.css"
import Item from '../Items/item'
import data_product from '../Assets/data'

const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            
        </div>
    </div>
  )
}

export default Relatedproduct