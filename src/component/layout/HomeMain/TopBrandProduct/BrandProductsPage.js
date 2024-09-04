import React from 'react'
import Product from '../Product'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate,useLocation,useParams } from 'react-router-dom'; 
import { getBrandProduct , getBrandDetails } from '../../../../actions/productAction';
import { useEffect } from 'react';
import Loader from '../../Loaders/loader';





const BrandProductsPage = () => {
    
  const {id}  = useParams();
  const dispatch = useDispatch();
  const {loading,products} = useSelector((state)=>state.brandProducts);
  const {brand , loading:loading2} = useSelector((state)=>state.brandDetails);
   
  useEffect(() => {
    if(id){
        dispatch(getBrandProduct(id))
        dispatch(getBrandDetails(id))
    }
  }, [dispatch])
  

  return (
    <>
   {loading ? <Loader/> : (
    <>

         
         <div className='brand-product-topHeader'>
         <div className='brand-header'>
               <p>FILTER</p>
               <p className='clear-BTN'>Clear all</p>
         </div>
         <div className='brand-name-logo'>
            
             {brand ?<>
             
             <div className='image'>
                <img src={brand.logo.url}/>
             </div>
             <p>{brand.name}</p>
             </>:<span>....Loading</span> }
             
         </div>
      </div>
      <div className='product-brand-wrappper'>
            
                    <div className='filter-container'>
                        
                        <div className='gender-filter'>
                             <div>
                                <input type='radio'/> <span><b>Women</b></span>
                             </div>
                             <div>
                                <input type='radio'/> <span><b>Men</b></span>
                             </div>
                             <div>
                                <input type='radio'/> <span><b>Girls</b></span>
                             </div>
                             <div>
                                <input type='radio'/> <span><b>Boys</b></span>
                             </div>
                        </div>
  
                        <div className='catagory-filter'>
                             <h3>Clothing Type</h3>
                             <div>
                                <input type='checkbox'/> <span>Tshirt</span>
                             </div>
                             <div>
                                <input type='checkbox'/> <span>jeans</span>
                             </div>
                             <div>
                                <input type='checkbox'/> <span>Jackets</span>
                             </div>
                             <div>
                                <input type='checkbox'/> <span>Shirt</span>
                             </div>
                        </div>
                        
                        {/* <div className='price-filter'>
                             <h3>Price</h3>
                              <div>
                                <input type='checkbox'/> <span>Rs 499 to Rs 999</span>
                              </div>
                              <div>
                                <input type='checkbox'/> <span>Rs 999 to Rs 2999</span>
                              </div>
                              <div>
                                <input type='checkbox'/> <span>Rs 2999 to Rs 4999</span>
                              </div>
                              
                        </div> */}
                    </div>
  
                    <div  className='product-brand-container' >
                
                    {/* {productss && productss.map((product)=> <Product product={product} />)} */}
                  {products && products.map((product)=> <Product product={product} />)}
  
                
                    </div>
           
      </div>
      </>
   )}
    </>
  )
}

export default BrandProductsPage