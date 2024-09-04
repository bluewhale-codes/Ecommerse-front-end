import React, { useDebugValue, useEffect  , useState} from 'react'
import { Carousel } from 'antd';
import "./productDetail.css"
import { useSelector,useDispatch } from 'react-redux'
import {getProductDetails, newReview} from "../../../actions/productAction"
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard'
import { useParams } from 'react-router-dom'
import {addItemTocart } from "../../../actions/cartAction"
import { Dialog , Rating ,Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import { NEW_REVIEW_RESET } from '../../../constants/productConstatns'
import MainLoader from '../../layout/Loaders/MainLoader'
import SmallLoader from '../Loaders/SmallLoader';
import Loader from '../Loaders/loader';

const ProductDetails = (props) => {

   const dispatch = useDispatch();
    const { id } = useParams();
    const {loading,product} = useSelector(
        (state)=>state.productDetails
    )
    const {loading:loading2,success} = useSelector(
        (state)=>state.newReview
    )

    const [quantity,setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")


    const submitReviewToggle = ()=> {
        open ? setOpen(false) : setOpen(true)

    }
    const reviewSubmitHandlar =()=>{
        const myForm = new FormData();
        myForm.set("rating",rating);
        myForm.set("comment",comment);
        myForm.set("productId",id);
        dispatch(newReview(myForm));
        setOpen(false)
   }
   const decreaseQuntity = () =>{
        let qty = quantity - 1;
        if(quantity<1){
        qty=0
        }
        setQuantity(qty)
    }
    const increaseQuantity = () =>{
        if(product.Stock<=quantity) return;
        let qty = quantity + 1;
        setQuantity(qty)
    }
    const addTocartHandler= async() => {
        dispatch(addItemTocart(id,quantity));
        props.showAlert('Added to cart','success')
    }

    useEffect(() => {
        if(success){
            props.showAlert('Revew Added','success')
            dispatch({type:NEW_REVIEW_RESET});
           // alert("Updated suucess")
         }
       dispatch(getProductDetails(id))

    }, [dispatch,id,success])


  return (

      <>
           <>
             
             {!product ? <Loader/> :  <div className='product-detail-wrapper'>
                <div className='product-detail-container'>
                    <div className='carosleproduct-image-flex1'>
                      <Carousel autoplay>
                      {product.images &&  product.images.map((item,i)=>{
                       return ( <div>
                        <div className='image-carousel-productDetail'>
                              <img src={item.url} />
                        </div>
                        </div>)

                           })}
                        </Carousel>
                     </div>
                     
                     <div className='product-detail-flex2'>
                           <h2>{product.name}</h2>
                           <div className='product-rating'>
                               <p>{product.rating}</p><div><Rating  value={product.rating} size='small'/></div><p id='rating-count-tag'>{product.numOfReviews} reviews</p>
                           </div>
                           <p className='product-price'>₹ {product.dPrice}<span id='B-discount-tag'>M.R.P. {product.Price}</span>{product.dpercentage?<span id='percentage-off'> ({product.dpercentage}% OFF)</span>:""}</p>


                           {product.catagory==="Clothes" &&
                              <div className='product-size'>
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                    <span>XXL</span>
                              </div>
                            }


                           <div className='product-QTY'>
                                 <span><button onClick={increaseQuantity}>+</button></span>
                                 <span>{quantity}</span>
                                 <span><button onClick={decreaseQuntity}>-</button></span>
                           </div>
                           <div className='AddToCart'>
                                <button onClick={addTocartHandler}>Add To Cart</button>
                           </div>
                           <p className='help-txt'>Free shipping order above ₹500</p>
                     </div>
                </div>
                <div className='product-description-review'>
                        <div className='review-section'>
                            <Dialog aria-labelledby='simple-dialog-title' open={open} onClose={submitReviewToggle}>
                            <DialogTitle>Submit Review</DialogTitle>
                            <DialogContent className='submitDialog'>
                                <Rating onChange={(e)=> setRating(e.target.value)} value={rating} size='large'/>
                                <textarea className='submitDialogTextArea' cols="30" rows="5" value={comment} onChange={(e)=> setComment(e.target.value)}>

                                </textarea>
                                <DialogActions>
                                    <Button onClick={submitReviewToggle}>Cancel</Button>
                                    <Button onClick={reviewSubmitHandlar}>Submit</Button>
                                </DialogActions>
                            </DialogContent>
                            </Dialog>
                              
                              <h2 className='review-header'>Customer reviews <div><button className='submitReview'>Submit Your Review</button></div></h2>
                              {product.review && product.review[0] ? (
                              <div>
                                {product.review.map((rev)=><ReviewCard rev={rev}/>)}
                              </div>
                              ):(
                              <div className='no-review-yet'>
                                 <div>
                                     <img src='https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-12186.jpg?w=740&t=st=1695228116~exp=1695228716~hmac=29726790c1984d28fcd2e6261f1ed864d05c66be10e528892dde46bd02c53728'/>
                                 </div>
                                 <p>No review Yet on this Product</p>
                                 <button  className='submitReview' onClick={submitReviewToggle}>Review now</button>

                              </div>

                              )}
                        </div>
                        <div className='description-section'>
                        <div>
                           <h2>Description:</h2><p>{product.description}</p>

                        </div>

                        </div>
                </div>
              </div>}

           </>

    

     </>
  )
}

export default ProductDetails