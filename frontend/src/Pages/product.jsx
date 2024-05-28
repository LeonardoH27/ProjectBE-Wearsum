import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { shopcontext } from '../Context/shopcontext';
import Detailsproduct from '../Components/Detailsproduct/detailsproduct';
import Displayproduct from '../Components/Displayproduct/displayproduct';


const Product = () => {
  const {all_product}= useContext(shopcontext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
        <Detailsproduct product={product}/>
        <Displayproduct product={product}/>
    </div>
  )
}

export default Product