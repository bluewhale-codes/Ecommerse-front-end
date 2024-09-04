import React from 'react'
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addItemTocart } from '../../../actions/cartAction';
const Product = ({product}) => {

  const dispatch = useDispatch();
  const quantity = 1
  const options = {
    edit:false,
    color:"rgb(170, 170, 170)",
    activeColor:"#003d29",
    size:window.innerWidth < 600? 20 : 25,
    value:product.rating,
    // value:4,
    isHalf:true

  }
  const addToCartHandler = (id)=>{
     dispatch(addItemTocart(id,quantity));
     alert('Item added successfully')
  }
  return (
    <div className='product-card'>
   
        <Link target='_blank' to={`/${product._id}/`}>
           <div className='productImage'>
                {/* <img src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png'/> */}
                <img src={product.images[0].url} alt={product.name}/>
              <div className='product-wishList'>
                <FavoriteIcon/>
              </div>
           </div>
      </Link>
           <div>
              <div className='product-title-wrap'><h3>{product.name}</h3><div><h3>₹{product.Price}<span>₹{product.dPrice}</span></h3></div></div>
              <div className='product-rating-wrap'><ReactStars {...options}/>({product.numOfReviews} Review)</div>
              <div className='product-addtocart'> <button onClick={()=>addToCartHandler(product._id)} className='button-to-cart'>Add to cart</button></div>
           </div>
      </div>
      //  <Link className='productCard' to={`/${product._id}`}>
      //     <img src={product.images[0].url} alt={product.name}/>
      //     <div id='discount-button'>
      //        <p>Up to 45% off</p><span>Gread Freedom Sale</span>
      //     </div>
      //     <p id='product-name'>{product.name}</p>
      //     <div>
      //       <ReactStars {...options}/> <span>({product.numOfReviews} Review)</span>
      //     </div>
      //     <span id='product-price'>₹{product.Price}</span>
      //  </Link>
  )
}

export default Product