import axios from "axios";
import {ALL_PRODUCT_REQUEST,
        ALL_PRODUCT_SUCCESS,
        ALL_PRODUCT_FAIL,
        BRAND_PRODUCT_REQUEST,
        BRAND_PRODUCT_SUCCESS,
        BRAND_PRODUCT_FAIL,
        ALL_BRANDS_REQUEST,
        ALL_BRANDS_SUCCESS,
        ALL_BRANDS_FAIL,
        CLEAR_ERRORS,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL,
        BRAND_DETAILS_REQUEST,
        BRAND_DETAILS_SUCCESS,
        BRAND_DETAILS_FAIL,
        NEW_REVIEW_REQUEST,
        NEW_REVIEW_SUCCESS,
        NEW_REVIEW_FAIL,
        ALL_REVIEW_REQUEST,
        ALL_REVIEW_SUCCESS,
        ALL_REVIEW_FAIL,
        DELETE_REVIEW_REQUEST,
        DELETE_REVIEW_SUCCESS,
        DELETE_REVIEW_FAIL,
        DELETE_REVIEW_RESET,
        ADMIN_PRODUCT_REQUEST,
        ADMIN_PRODUCT_SUCCESS,
        ADMIN_PRODUCT_FAIL,
        NEW_PRODUCT_REQUEST,
        NEW_PRODUCT_SUCCESS,
        NEW_PRODUCT_FAIL,
        NEW_BRAND_REQUEST,
        NEW_BRAND_SUCCESS,
        NEW_BRAND_FAIL,
        DELETE_PRODUCT_REQUEST,
        DELETE_PRODUCT_SUCCESS,
        DELETE_PRODUCT_FAIL,
        DELETE_PRODUCT_RESET  , 
        UPDATE_PRODUCT_REQUEST,
        UPDATE_PRODUCT_SUCCESS,
        UPDATE_PRODUCT_FAIL, 
        UPDATE_PRODUCT_RESET,
        ADD_SHIPPING_INFO_REQUEST,
        ADD_SHIPPING_INFO_SUCCESS,
        ADD_SHIPPING_INFO_FAIL,
        GET_COUPONS_REQUEST,
        GET_COUPONS_SUCCESS,
        GET_COUPONS_FAIL,
        GET_SHIPPING_INFO_REQUEST,
        GET_SHIPPING_INFO_SUCCESS,
        GET_SHIPPING_INFO_FAIL,
        UPDATE_SHIPPING_INFO_REQUEST,
        UPDATE_SHIPPING_INFO_SUCCESS,
        UPDATE_SHIPPING_INFO_FAIL,
        DELETE_SHIPPING_INFO_REQUEST,
        DELETE_SHIPPING_INFO_SUCCESS,
        DELETE_SHIPPING_INFO_FAIL,
        GET_DISCOUNT_REQUEST,
        GET_DISCOUNT_SUCCESS,
        GET_DISCOUNT_FAIL,
        GET_DISCOUNT_RESET,

} from "../constants/productConstatns"

export const getProduct = (catagory="", keyword="",currentPage="1")=> async(dispatch)=>{
   try {
     dispatch({
        type:ALL_PRODUCT_REQUEST
     })
   //  let link  = `/api/v1/products?keyword=${keyword}&page=${currentPage}`
    let link = `/api/v1/products?catagory=${catagory}&keyword=${keyword}&page=${currentPage}`
     const {data} = await axios.get(link);

    dispatch({
        type:ALL_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:ALL_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}
export const getBrandProduct = (id)=> async(dispatch)=>{
   try {
     dispatch({
        type:BRAND_PRODUCT_REQUEST
     })
  
    let link = `/api/v1/Brand/product/${id}`
     const {data} = await axios.get(link);
      
    dispatch({
        type:BRAND_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:BRAND_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}
export const getAllBrand = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:ALL_BRANDS_REQUEST
     })
  
    let link = "/api/v1/Brand/all"
     const {data} = await axios.get(link);

    dispatch({
        type:ALL_BRANDS_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:ALL_BRANDS_FAIL,
          payload:error.response.data.message
      });
   }
}

// get Admin products
export const getAdminProduct = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:ADMIN_PRODUCT_REQUEST
     })
    let link  = "/api/v1/products/admin"
     const {data} = await axios.get(link);

    dispatch({
        type:ADMIN_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:ADMIN_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}
// Create a product::
export const newProduct = (productData)=> async (dispatch)=>{
   try {
     dispatch({
        type:NEW_PRODUCT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.post("/api/v1/products/new",productData,config);

    dispatch({
        type:NEW_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:NEW_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}
export const createNewBrand = (brandData)=> async (dispatch)=>{
   try {
     dispatch({
        type:NEW_BRAND_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.post("/api/v1/Brand/create",brandData,config);

    dispatch({
        type:NEW_BRAND_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:NEW_BRAND_FAIL,
          payload:error.response.data.message
      });
   }
}

// update a product::
export const updateProduct = (id,productData)=> async (dispatch)=>{
   try {
     dispatch({
        type:UPDATE_PRODUCT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.put(`/api/v1/products/${id}`,productData,config);

    dispatch({
        type:UPDATE_PRODUCT_SUCCESS,
        payload:data.success,
    })
   } catch (error) {
      dispatch({
          type:UPDATE_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}

// product detail
export const getProductDetails = (id)=> async (dispatch)=>{
    try {
      dispatch({
         type:PRODUCT_DETAILS_REQUEST
      })
 
      const {data} = await axios.get(`/api/v1/products/details/${id}`);
 
     dispatch({
         type:PRODUCT_DETAILS_SUCCESS,
         payload:data.product,
     })
    } catch (error) {
       dispatch({
           type:PRODUCT_DETAILS_FAIL,
           payload:error.response.data.message
       });
    }
 }
// brand detail
export const getBrandDetails = (id)=> async (dispatch)=>{
    try {
      dispatch({
         type:BRAND_DETAILS_REQUEST
      })
 
      const {data} = await axios.get(`/api/v1/Brand/detail/${id}`);
 
     dispatch({
         type:BRAND_DETAILS_SUCCESS,
         payload:data.brand,
     })
    } catch (error) {
       dispatch({
           type:BRAND_DETAILS_FAIL,
           payload:error.response.data.message
       });
    }
 }
// Make a review
 export const newReview = (reviewData)=> async (dispatch)=>{
    try {
      dispatch({
         type:NEW_REVIEW_REQUEST
      })
      const config = {headers:{"Content-Type":"application/json"}}
 
      const {data} = await axios.put("/api/v1/review",reviewData,config);
 
     dispatch({
         type:NEW_REVIEW_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:NEW_REVIEW_FAIL,
           payload:error.response.data.message
       });
    }
 }
// Delete Product
 export const deleteProduct = (id)=> async (dispatch)=>{
    try {
      dispatch({
         type:DELETE_PRODUCT_REQUEST
      })
 
      const {data} = await axios.delete(`/api/v1/products/delete/${id}`);
 
     dispatch({
         type:DELETE_PRODUCT_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:DELETE_PRODUCT_FAIL,
           payload:error.response.data.message
       });
    }
 }

// Delete Product review - ADMIN
 export const deleteReviews = (reviewId,productId)=> async (dispatch)=>{
    try {
      dispatch({
         type:DELETE_REVIEW_REQUEST
      })
 
      const {data} = await axios.delete(`/api/v1/review?productId=${productId}&id=${reviewId}`);
 
     dispatch({
         type:DELETE_REVIEW_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:DELETE_REVIEW_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // get All Reviews of a product -- ADMIN
export const getAllReviews = (id)=> async(dispatch)=>{
   try {
     dispatch({
        type:ALL_REVIEW_REQUEST
     })
    let link  = `/api/v1/review/?productId=${id}`;
     const {data} = await axios.get(link);

    dispatch({
        type:ALL_REVIEW_SUCCESS,
        payload:data.reviews,
    })
   } catch (error) {
      dispatch({
          type:ALL_REVIEW_FAIL,
          payload:error.response.data.message
      });
   }
}

 // add shipping address
export const addShippingInfo = (address)=> async(dispatch)=>{
   try {
     dispatch({
        type:ADD_SHIPPING_INFO_REQUEST
     })
     

   const config = {headers:{"Content-Type":"application/json"}}
   let link  = '/api/v1/shippingInfo';
     const {data} = await axios.post(link,address,config);

    dispatch({
        type:ADD_SHIPPING_INFO_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:ADD_SHIPPING_INFO_FAIL,
          payload:error.response.data.message
      });
   }
}

// get Shipping info
export const getShippingInfo = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_SHIPPING_INFO_REQUEST
     })
    let link  = "/api/v1/shIppingInfo"
     const {data} = await axios.get(link);

    dispatch({
        type:GET_SHIPPING_INFO_SUCCESS,
        payload:data.shippInfo,
    })
   } catch (error) {
      dispatch({
          type:GET_SHIPPING_INFO_FAIL,
          payload:error.response.data.message
      });
   }
}

// UPDATE SHIPPING INFO
export const updateShippingInfo = (id,addData)=> async (dispatch)=>{
   try {
     dispatch({
        type:UPDATE_SHIPPING_INFO_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.put(`/api/v1/shippingInfo/update/${id}`,addData,config);

    dispatch({
        type:UPDATE_SHIPPING_INFO_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:UPDATE_SHIPPING_INFO_FAIL,
          payload:error.response.data.message
      });
   }
}

// DELETE SHIPPING INFO
export const removeShippInfo = (id)=> async (dispatch)=>{
   try {
     dispatch({
        type:DELETE_SHIPPING_INFO_REQUEST
     })

     const {data} = await axios.delete(`/api/v1/shippingInfo/delete/${id}`);

    dispatch({
        type:DELETE_SHIPPING_INFO_SUCCESS,
        payload:data.success,
    })
   } catch (error) {
      dispatch({
          type:DELETE_SHIPPING_INFO_FAIL,
          payload:error.response.data.message
      });
   }
}


// get Shipping info
export const getCouponsInfo = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_COUPONS_REQUEST
     })
    let link  = "/api/v1/all/coupon"
     const {data} = await axios.get(link);

    dispatch({
        type:GET_COUPONS_SUCCESS,
        payload:data.coupons,
    })
   } catch (error) {
      dispatch({
          type:GET_COUPONS_FAIL,
          payload:error.response.data.message
      });
   }
}

export const getDiscountProduct = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_DISCOUNT_REQUEST
     })
   //  let link  = `/api/v1/products?keyword=${keyword}&page=${currentPage}`
    let link = `/api/v1/discountproduct`
     const {data} = await axios.get(link);

    dispatch({
        type:GET_DISCOUNT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_DISCOUNT_FAIL,
          payload:error.response.data.message
      });
   }
}


// CLEAR ERRORS
export const clearErrors = ()=> async(dispatch)=>{ 
    dispatch({type:CLEAR_ERRORS})
}




