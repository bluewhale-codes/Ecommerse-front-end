import React ,{useEffect,useState} from 'react'
import Product from './Product'
import "./home.css"
import { Carousel } from 'antd';
import Loader from '../Loaders/loader'
import MetaData from '../MetaData'
import { useSelector,useDispatch } from 'react-redux'
import {getProduct,getDiscountProduct} from "../../../actions/productAction"
import {getAllBrand} from "../../../actions/productAction"
import { Link } from "react-router-dom";
import DiscountProducts from './CatagoryProducts'
import BrandCard from './TopBrandProduct/BrandCard';



function Home() {
  const dispatch = useDispatch();
  
  const {loading,error,products,productsCount} = useSelector(
    (state)=>state.products
  )
  const {dproduct} = useSelector(
    (state)=>state.discountProduct
  )
  const {Brands} = useSelector(
    (state)=>state.brands
  )
  const [catagory,setCatagory] = useState()

  //  useEffect(() => {
  //     dispatch(getProduct())
  //     dispatch(getAllBrand())

  //  }, [dispatch])
  
  const catagorySarchHandler = (catagory)=>{
    setCatagory(catagory)
  }

  useEffect(() => {
    dispatch(getProduct(catagory))
    dispatch(getDiscountProduct())
    dispatch(getAllBrand())

  }, [dispatch,catagory])

  return (
   
    <>
       {loading?<Loader/>: <>
      <MetaData title="Ecommerce"/>
      <div>
         
          <div className='banner'>


               <Carousel autoplay>
                        <div className='home-carousel-image'>
                            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/boat/Enigma/upGW_tallhero_1500x600._CB578180206_.jpg' />
                        </div>

                        <div className='home-carousel-image'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/Launches23/Realme_T300_revision/D95787821-_DesktopTallHero_3000x1200._CB577898096_.jpg' />
                         </div>
                         <div className='home-carousel-image'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD_GW_PC-1-2zv._CB577804219_.jpg' />
                      </div>
                      <div className='home-carousel-image'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q3/Hero_1500x600_PS5._CB596419683_.jpg' />
                      </div>
                      <div className='home-carousel-image'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/NordCE2Lite/22Sept/D42850095_WLD_OnePlus_OSCAR_NewLaunch_DesktopHero_3000x1200._CB578813241_.jpg' />
                      </div>
               </Carousel>
                {/* <Carousel autoplay>
                  
                        <div className='image-carousel'>
                            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/boat/Enigma/upGW_tallhero_1500x600._CB578180206_.jpg' />
                        </div>
                    
                      <div className='image-carousel'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/Launches23/Realme_T300_revision/D95787821-_DesktopTallHero_3000x1200._CB577898096_.jpg' />
                      </div>
                      <div className='image-carousel'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD_GW_PC-1-2zv._CB577804219_.jpg' />
                      </div>
                      <div className='image-carousel'>
                          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q3/Hero_1500x600_PS5._CB596419683_.jpg' />
                      </div>
                   
                </Carousel> */}
             {/* <div className='banner-text-content'>
                  <p>Welcome</p>
                <h1>Find Amazing Product Below </h1>
                <a href='#container'>
                    <button>Scrool</button>
                </a> 
               </div>  */}
          </div>
          <div className='TopDealProducts'>
              <h2 className='homeHeading'>Todays Best Deals For You!</h2>
              <div className='catagoryButtons'>
                  <div onClick={()=>catagorySarchHandler("")}  className='HomeCatagory-active buttonTtitle'>All</div>
                  <div onClick={()=>catagorySarchHandler("Clothes")} className='buttonTtitle'>Clothes</div>

                 
                  <div onClick={()=>catagorySarchHandler("Shoose")} className='buttonTtitle'>Shoose</div>
                  <div onClick={()=>catagorySarchHandler("Electronics")} className='buttonTtitle'>Electronics</div>
                  <div onClick={()=>catagorySarchHandler("Accessories")} className='buttonTtitle'>Assasiories</div>

              </div>
              <div className='container' id='container'>
               {products && products.map((product)=> <Product DiscountProducts product={product} />)} 
              </div>
          </div>
      </div>


      <div className='cashBackBanner'>
         <div>
            <h1>Get 25% Cash Back</h1>
              <p>On Your your First order</p>
              <button>Learn More</button>
          </div>
         
      </div>

    
      <div className='top-clothing-brands'>
              <h2 className='heading-most-selling'>Top Clothing Brands</h2>
              
              <div className='most-selling-product-container'>

              {Brands && Brands.map((brand)=><Link target='_blank'  to={`/test1/${brand._id}`}><BrandCard image={brand.logo}/></Link>)}
              
               
              </div>
      </div>
      
      
      <div className='catagory-container'>
              <h2 className='catagory-title'>Heavy Discount Products!!</h2>
              
              <div className='catagory-card'>
              {dproduct && dproduct.map((product)=> <DiscountProducts product={product}/>)} 
              </div>
      </div>


    </>}
    </>

   
  )
}

export default Home