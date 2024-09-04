import {ADD_TO_CART ,REMOVE_CART_ITEM,SAVE_SHIPPING_INFO,SAVE_COUPON_INFO} from '../constants/cardConstant';
import axios from "axios";


// Add Item To cart
export const addItemTocart = (id,quantity)=> async(dispatch,getState)=>{


      const {data} = await axios.get(`/api/v1/products/details/${id}`);
      if(data.product.dpercentage){
         const dprice = (data.product.dpercentage/100 ) * data.product.Price
         data.product.dPrice = data.product.Price - dprice
      }
      dispatch({
         type:ADD_TO_CART,
         payload:{
            success:true,
            product:data.product._id ,
            name:data.product.name ,
            price:data.product.Price,
            discountPrice:data.product.dPrice,
            image:data.product.images[0].url,
            Stock:data.product.Stock,
            percentageOff:data.product.dpercentage,
            quantity
         }
     });
     
     localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems ))
   
 }

 // Remove Item from cart
 export const removeItemFromCart = (id) => async(dispatch,getState) =>{

         dispatch({
            type:REMOVE_CART_ITEM,
            payload:id,
      });
      localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems ))

}

  // SAVE shipping info
export const saveShippingInfo = (data) => async(dispatch) =>{
dispatch({
   type:SAVE_SHIPPING_INFO,
   payload:data,
})
localStorage.setItem("shippingInfo",JSON.stringify(data));
}

  // SAVE shipping info
  export const saveCouponInfo = (data) => async(dispatch) =>{
   dispatch({
      type:SAVE_COUPON_INFO,
      payload:data,
   })
   localStorage.setItem("couponInfo",JSON.stringify(data));
  }

