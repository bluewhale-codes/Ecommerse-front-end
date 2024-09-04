import React from 'react'
import './adminProduct.css'
import { Link } from 'react-router-dom';
import { Dialog , Rating ,Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
const AdminProduct = ({product}) => {
  return (
    <Link to={`/admin/product/detail/${product._id}`}>
      <div className='adminProductCard'>
        <div className='admin-product-image'>
            <img src={product.images[0].url}/>
        </div>
        <div className='admin-productDetail-container'>
             <p className='product-name'>{product.name}</p>
             <div className='product_rating'>
             <Rating  value={4} size='small'/>
             </div>
             <div className='product_status'>
               <span>In stock</span>
             </div>

        </div>
      </div>
      </Link>
  )
}

export default AdminProduct