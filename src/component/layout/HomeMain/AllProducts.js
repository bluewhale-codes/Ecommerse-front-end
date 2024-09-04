import React ,{useEffect} from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import {getProduct} from "../../../actions/productAction"
import Loader from '../Loaders/loader'
import Product from './Product'
import Pagination from 'react-js-pagination'
import { useState } from 'react'
import "./allProducts.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useParams ,useNavigate ,Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




const AllProducts = () => {

    const dispatch = useDispatch();
    const { keyword } = useParams()
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [catagory,setCatagory] = useState()
    const {loading,error,products,productsCount , resultPerPage} = useSelector(
        (state)=>state.products
    );

    const categories =[
      "Clothes",
      "Shoose",
      "Accessories",
      "Electronics",
  ]

   //  const priceHandler = (event,newPrice)=>{
   //         setPrice(newPrice)
   //  }
    const catagorySarchHandler = (catagory)=>{
          setCatagory(catagory)
         
          
    }
   //  const catagory = ""
    // const keyword = match.params.keyword
    useEffect(() => {
        dispatch(getProduct(catagory,keyword,currentPage))
  
     }, [dispatch,keyword,currentPage,catagory])

     const setCurrentPageNo = (e)=>{
          setCurrentPage(e)
     }

     
     
     

  return (
    <>
    {loading?<Loader/>:(<>

          
           <div className='all-productCatagory-wrapper'>
            
              <div  className='all-productCatagory-container'>
                    <div className='left-section'>
                     
                        <h2 className={catagory === "Clothes" ? 'category-active':''}>Clothes</h2>
                        <a href='#section'>
                        <img onClick={()=>catagorySarchHandler("Clothes")}  src='https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149133973.jpg?w=740&t=st=1694108624~exp=1694109224~hmac=619a0ed2a337b59e560d43e526d42c836f12b6bb5406c85ceee2dd1494c34852'/>
                        </a>
                    </div>
                    <div className='right-section'>
                            <div className='only-shoes-catagory'>
                            <h2 className={catagory === "Shoose" ? 'category-active':''}>Shoose</h2>
                              <img onClick={()=>catagorySarchHandler("Shoose")} src='https://img.freepik.com/free-photo/sunglasses-shoes-white-color_23-2148109272.jpg?w=1380&t=st=1694109430~exp=1694110030~hmac=19563817e27005d600e10ae4b614063f5e7c42097887c8cb34d065728de64591'/>
                            </div>
                            <div className='electronics-access-catagory'>
                                <div className='electronics'>
                           
                                  <h2 className={catagory === "Electronics" ? 'category-active':''}>Electronics</h2>
                                  <img onClick={()=>catagorySarchHandler("Electronics")} src='https://img.freepik.com/free-photo/laptop-with-camera-sd-card-pink-table_23-2148037002.jpg?w=1380&t=st=1694109160~exp=1694109760~hmac=2e425bc3ec23e7a3528952a1e69c86fc05e9267fbd1233afae1f17e08c8228bb'/>
                                </div>
                                <div className='accessory'>
                                  
                                  <h2 className={catagory === "Accessories" ? 'category-active':''}>Accessories</h2>
                                  
                                   <img onClick={()=>catagorySarchHandler("Accessories")} src='https://img.freepik.com/free-photo/beautiful-casual-woman-fashion-set_1203-7834.jpg?w=1380&t=st=1694108823~exp=1694109423~hmac=d94b8cdc1655c791aa05e1f55a199153eefcc3f4318f06593883c961354ed4e7'/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div id='section' className='category-header-cantainer' >
                {/* <div className='category-header-tag'>
                <select className='category-header-select' onChange={(e)=>setCatagory(e.target.value)}>
                        <option value="">Choose Category</option>
                        {categories.map((cate)=>(
                        <option key={cate} value={cate}>{cate}</option>)
                        )}
                  </select>
                   <p>{catagory}</p>
                </div> */}
            </div>
            <div className='product-catagory-wrapper'>
                  <div className='filter-container'>
                      <p>FILTERS</p>
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
                           <h3>CATAGORIES</h3>
                           <div>
                              <input type='checkbox'/> <span>Clothes</span>
                              <div>
                                  <div><input type='checkbox'/> <span>Tshirt</span></div>
                                  <div><input type='checkbox'/> <span>Shirt</span></div>
                                  <div><input type='checkbox'/> <span>Jacket</span></div>
                                  <div><input type='checkbox'/> <span>Jeans</span></div>
                              </div>
                           </div>
                           <div>
                              <input type='checkbox'/> <span>Shoose</span>
                           </div>
                           <div>
                              <input type='checkbox'/> <span>Electronics</span>
                              <div>
                                  <div><input type='checkbox'/> <span>Mobile</span></div>
                                  <div><input type='checkbox'/> <span>Smart Watch</span></div>
                                  <div><input type='checkbox'/> <span>Laptop</span></div>
                                  <div><input type='checkbox'/> <span>Headphones</span></div>
                                  <div><input type='checkbox'/> <span>Daily use Electronics</span></div>
                              </div>
                           </div>
                           <div>
                              <input type='checkbox'/> <span>Assaciroies</span>
                                 <div>
                                    <div><input type='checkbox'/> <span>Handbags</span></div>
                                    <div><input type='checkbox'/> <span>Travelling Bags</span></div>
                                    <div><input type='checkbox'/> <span>Eyecare</span></div>
                                    <div><input type='checkbox'/> <span>Laptop Table</span></div>
                                    <div><input type='checkbox'/> <span>Bed sheets</span></div>
                                 </div>
                           </div>
                      </div>
                      
                      <div className='price-filter'>
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
                            
                      </div>
                  </div>

                  <div  className='product-catagory-container' >
              
                  {/* {productss && productss.map((product)=> <Product product={product} />)} */}
                {products && products.map((product)=> <Product product={product} />)}

              
                  </div>
            </div>

            {resultPerPage < productsCount && (
        <div className='paginationBox'>
        <Pagination
         activePage={currentPage}
         itemsCountPerPage={resultPerPage} 
         totalItemsCount={productsCount}
         onChange={setCurrentPageNo}
         nextPageText='Next'
         prevPageText="Prev"
         firstPageText="1st"
         lastPageText="Last"
         itemClass='page-item'
         linkClass='page-link'
         activeClass='pageItemActive'
         activeLinkClass='pageLinkActive'
         />
      </div>
      )}














        {/* <h2 className='homeHeading'>Products</h2>
      <div className='container' id='container'>
        
        {products && products.map((product)=> <Product product={product} />)}
        
      </div>
 
      <div className='filterBox'>
           
            <Box width={300}>
            <Slider defaultValue={price} onChange={priceHandler} min={0} max={25000} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
           
      </div>

       */}
    </>
    
    )}
    </>
  )
}

export default AllProducts