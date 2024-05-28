import React from 'react'
import "./emphasis.css"
import data_product from '../Assets/data'
import Item from '../Items/item'

const Emphasis = () => {
  return (
    <div className='emphasis'>
        <h1>WOMEN´S CLOTHING HIGHLIGHTS</h1>
        <hr />
        <div className="emphasis-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Emphasis