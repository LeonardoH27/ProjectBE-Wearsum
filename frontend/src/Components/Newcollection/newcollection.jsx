import React from 'react'
import "./newcollection.css"
import New_collections from '../Assets/new_collections'
import Item from '../Items/item'

const Newcollection = () => {
    return (
      <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection">
          {New_collections.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      </div>
    )
  }

export default Newcollection