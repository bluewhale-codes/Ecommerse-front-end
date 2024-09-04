import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'
import './discount-product.css'
const DiscountProducts = ({product}) => {
  return (
    <>
      <div className='discount-product-card'>
      <Link target='_blank' to={`/${product._id}/`}>
           <div className='discount-productImage'>
               <img src={product.images[0].url}/>
              <div className='discount-product-wishList'>
                 <FavoriteIcon/>
              </div>
           </div>
       </Link>
           <div>
              <div className='discount-tag'><span>up to {product.dpercentage}% Off</span></div>
              <div className='discount-title-wrap'><h3>{product.name}</h3></div>
             
           </div>
      </div>
    </>
  )
}

export default DiscountProducts