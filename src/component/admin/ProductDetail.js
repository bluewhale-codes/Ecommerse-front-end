import React, { useDebugValue, useEffect  , useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './sidebar.css'
import { Carousel, Skeleton } from 'antd';
import Sidebar from './Sidebar'
import './subComponents/productDetail.css'
import AddIcon from '@mui/icons-material/Add';
import { Link ,useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReviewCard from '../layout/HomeMain/ReviewCard';
import { getProductDetails } from '../../actions/productAction';


const ProductDetail = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
    const { id } = useParams();
    const {loading, error,product} = useSelector(
        (state)=>state.productDetails
      )

      useEffect(() => {
      
        dispatch(getProductDetails(id))
  
     }, [dispatch,id]);

  
  return (
    <div className='dashboard'>
        <Sidebar/>
      
         <div className='productListContainer'>

              <div className="wrap">
                          <div className="search">
                              <input type="text" className="searchTerm" placeholder="Enter Product Id.."/>
                              <button type="submit" className="searchButton">
                                  <i className="fa fa-search"><SearchIcon/></i>
                              </button>
                          </div>
              </div>

              {product &&<div>
                
<div className='Product-list-header'>
     <div>
       <h3>Product Id: #3214313</h3>
     </div>
     <div>
     <Link to={`/admin/product/${product && product._id}`}>
       <button>Edit Product</button>
     </Link>
     </div>
</div>

 <div className='admin-SingleProduct-detail'>
   <div className='SingleProduct-image'>
     <div id='admin-product-img'>
      <img src={product.images[0].url}/> 
      
     </div>
     <div>
         <div className='imgDetail-flex-wrapper'>
                   <p className='detail-tag-label'>Product Images</p>
                   <div>
                     {product && product.images.map((image)=><div className='image-Card'>
                       <img src={image.url}/>
                     </div>)}
                      
                   </div>
           </div>
             
             <div className='detail-flex-wrapper'>
                   <div>
                     
                     <button>Upload</button>
                   </div>
             </div>
            
     </div>
      
       
   </div>
   <div className='SingleProduct-Detail'>
        
        <div className='detail-wrapper'>
            <p className='detail-tag-label'>Product Name</p>
            <div >
               <p>{product.name} </p>
            </div>
        </div>
        <div className='detail-flex-wrapper'>
             <div>
               <p className='detail-tag-label'>Product MRP</p>
               <div>
                   <p className='value-wrapper'>₹{product.Price}</p>
               </div>
             </div>
             <div>
               <p className='detail-tag-label'>Discount Price</p>
               <div>
                   <p className='value-wrapper'>₹{product.dPrice}</p>
               </div>
             </div>
        </div>
        <div className='detail-flex-wrapper'>
             <div>
               <p className='detail-tag-label'>Total Rating</p>
               <div>
                   <p className='value-wrapper'>{product.rating}</p>
               </div>
             </div>
             <div>
               <p className='detail-tag-label'>Reviews</p>
               <div>
                   <p className='value-wrapper'>{product.numOfReviews} Reviews</p>
               </div>
             </div>
        </div>
        <div className='detail-wrapper'>
            <p className='detail-tag-label'>Product Description</p>
            <div>
               <p>Hello world this is vishal</p>
            </div>
        </div>
        <div className='detail-flex-wrapper'>
             <div>
               <p className='detail-tag-label'>Catagory</p>
               <div>
                   <p className='value-wrapper'>{product.catagory}</p>
               </div>
             </div>
             <div>
               <p className='detail-tag-label'>Product Stock</p>
               <div>
                   <p className='value-wrapper'>{product.Stock}</p>
               </div>
             </div>
        </div>
        <div className='detail-flex-wrapper'>
                   <div>
                     <p className='detail-tag-label'>Created At</p>
                     <div>
                         <p className='value-wrapper'>{product.createdAt}</p>
                     </div>
                   </div>
                   <div>
                     <p className='detail-tag-label'>Last update</p>
                     <div>
                         <p className='value-wrapper'>12 Oct,2023</p>
                     </div>
                   </div>
       </div>
       <div className='detail-flex-wrapper'>
                   <div>
                 
                     <button>Update</button>
                     
                   </div>
                   <div>
                     
                     <button>Delete</button>
                   </div>
      </div>
        

        

   </div>
 </div>

 <div className='admin-product-review-container'>
 <h2>Customer Review</h2>
 {product && product.review.map((rev)=><ReviewCard rev={rev}/>)}
 
 </div>
                
                </div>}


</div>
   </div>
  )
}

export default ProductDetail