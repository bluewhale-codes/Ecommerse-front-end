import React from 'react'
import { Rating } from '@mui/material';
import './similarProduct.css'
import { Link } from "react-router-dom";

const SimilaProductCard = ({product}) => {
  return (
    <div className='end-product-card'>
        <Link to={`/${product._id}/`}>
        <div>
        <img src={product.images[0].url}/>
        </div>
        </Link>
        <Rating value={product.rating} size='small'/>
        <p className='item-name'>{product.name}</p>
        <p className='item-price'>₹{product.dPrice}<span>₹{product.Price}</span></p>
     
    </div>
  )
}

export default SimilaProductCard