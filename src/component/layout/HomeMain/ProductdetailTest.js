import React, { useDebugValue, useEffect  , useState} from 'react'
import Loader from '../LoaderMain/loader'
import { useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../../actions/productAction';
import { Dialog , Rating ,Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
const ProductdetailTest = () => {

   const variants  =[
      {
        variantOptions: ['Red','S'],
        price: 399,
        camparePrice: 599,
        costPerItem: 300,
        profit: 100,
        margin: 20,
        weight: 8,
        stock: 10,
        _id: "6548f828ecdeb2527107dae3"
      },
      {
        variantOptions: ['Blue','XXL'],
        price: 399,
        camparePrice: 599,
        costPerItem: 300,
        profit: 100,
        margin: 20,
        weight: 8,
        stock: 10,
        _id: "6548f828ecdeb2527107dae3"
      }
    ]
   const dispatch = useDispatch()
   const { id } = useParams();
   const {loading,product} = useSelector(
      (state)=>state.productDetails
   )
  
   const findVariant = ()=>{
      const options=['S','XXl']
      const v = variants.find((e) => options.every(element => e.variantOptions.includes(element)));
      console.log(v)
   }

   useEffect(() => {
      dispatch(getProductDetails(id))
   }, [dispatch]);
 return (
     <>
       {loading ? <Loader/> :(
        <>
         
         <div className='product-detail-wrapper'>
               <div className='product-detail-container'>
                   <button onClick={findVariant}>Find</button>
                    <div className='carosleproduct-image-flex1'>
                        <img src='https://m.media-amazon.com/images/I/71dsmh1-tAL._UY575_.jpg'/>
                    </div>
                    <div className='product-detail-flex2'>
                          {product && <h2>{product.title}</h2>}
                          <div className='product-rating'>
                              <p>4.5</p><div><Rating  value='3' size='small'/></div><p id='rating-count-tag'>45 reviews</p>
                          </div>
                          <p className='product-price'>₹<span id='B-discount-tag'>M.R.P. ₹4000</span></p>
                          
                         
                             <div className='product-size'>
                                   <span>S</span>
                                   <span>M</span>
                                   <span>L</span>
                                   <span>XL</span>
                                   <span>XXL</span>
                             </div> 
                           
                          
                          <div className='product-QTY'>
                                <span ><button>+</button></span>
                                <span>1</span>
                                <span><button>-</button></span>
                          </div>
                          <div className='AddToCart'>
                               <button>Add To Cart</button>
                          </div>
                          <p className='help-txt'>Free shipping order above ₹500</p>
                    </div>
               </div>

               <div className='product-description-review'>
                       <div className='review-section'>
                       </div>
                       <div className='description-section'>
                       <div> 
                          <h2>Description:</h2><p>Hello world this is vishal shakya</p>
                          
                       </div>
                       
                       </div>
               </div>
        
        </div>
             
        <div className='end-product-container'>
             <h2>More similar items</h2>
             
             <div className='end-product-cards-container'>
                     
                    
             </div>
        </div>
      </>
       )}
    </>
 )
}

export default ProductdetailTest