import React from 'react'
import './sellerCard.css'
import {  Rating} from '@mui/material';
const SellectCard = () => {
  return (
    <div className='seller-card-wrapper'>
          <div className='BrandLogo'>
             <img src='https://res.cloudinary.com/dycjjaxsk/image/upload/v1694978732/Brand/czirvinhpudwbkgggfrr.webp'/>
          </div>
          <div>
             <p className='brandNameTitle'> <Rating  value={4} size='small'/></p>
             <div className='item-stock-text'>
                <span>54</span>
                <p>Item Stock</p>
             </div>
          </div>
          <div className='card-footer-btn'>
             <button>View Details</button>
          </div>
    </div>
  )
}

export default SellectCard