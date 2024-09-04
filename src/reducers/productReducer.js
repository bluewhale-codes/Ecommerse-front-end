import {ALL_PRODUCT_REQUEST
        ,ALL_PRODUCT_SUCCESS,
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
        NEW_REVIEW_RESET,
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
        NEW_PRODUCT_RESET,
        NEW_BRAND_REQUEST,
        NEW_BRAND_SUCCESS,
        NEW_BRAND_FAIL,
        NEW_BRAND_RESET,
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
        ADD_SHIPPING_INFO_RESET,
        GET_SHIPPING_INFO_REQUEST,
        GET_SHIPPING_INFO_SUCCESS,
        GET_SHIPPING_INFO_FAIL,
        GET_SHIPPING_INFO_RESET,
        GET_COUPONS_REQUEST,
        GET_COUPONS_SUCCESS,
        GET_COUPONS_FAIL,
        GET_COUPONS_RESET,
        DELETE_SHIPPING_INFO_REQUEST,
        DELETE_SHIPPING_INFO_SUCCESS,
        DELETE_SHIPPING_INFO_FAIL,
        DELETE_SHIPPING_INFO_RESET, 
        UPDATE_SHIPPING_INFO_REQUEST,
        UPDATE_SHIPPING_INFO_SUCCESS,
        UPDATE_SHIPPING_INFO_FAIL,
        UPDATE_SHIPPING_INFO_RESET,
        GET_DISCOUNT_REQUEST,
        GET_DISCOUNT_SUCCESS,
        GET_DISCOUNT_FAIL,
        GET_DISCOUNT_RESET,
} from "../constants/productConstatns"


export const productsReducer = (state = {product:[]} ,action)=>{
 
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
          
          return {
              loading:true,
              product:[]
          }
      case ALL_PRODUCT_SUCCESS:
          
          return {
              loading:false,
              products:action.payload.products,
              productsCount:action.payload.productCount,
              resultPerPage:action.payload.resultPerPage
          }
      case ALL_PRODUCT_FAIL :
          
          return {
              loading:false,
              error:action.error,
          };
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};
export const brandProductsReducer = (state = {product:[]} ,action)=>{
 
    switch (action.type) {
      case BRAND_PRODUCT_REQUEST :
          
          return {
              loading:true,
              product:[]
          }
      case BRAND_PRODUCT_SUCCESS:
          
          return {
              loading:false,
              products:action.payload.product,
          }
      case BRAND_PRODUCT_FAIL:
          
          return {
              loading:false,
              error:action.error,
          };
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};

export const allBrandsReducer = (state = {Brands:[]} ,action)=>{
 
    switch (action.type) {
      case ALL_BRANDS_REQUEST :
          
          return {
              loading:true,
              Brands:[]
          }
      case ALL_BRANDS_SUCCESS:
          
          return {
              loading:false,
              Brands:action.payload.brands,
          }
      case ALL_BRANDS_FAIL:
          
          return {
              loading:false,
              error:action.error,
          };
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};

export const adminProductReducer = (state = {product:[]} ,action)=>{
 
    switch (action.type) {
      case ADMIN_PRODUCT_REQUEST :
          
          return {
              loading:true,
              product:[]
          }
      case ADMIN_PRODUCT_SUCCESS :
          
          return {
              loading:false,
              products:action.payload.products
             
          }
      case ADMIN_PRODUCT_FAIL :
          
          return {
              loading:false,
              error:action.error,
          };
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};




export const productDetailsReducer  = (state = {Product:{}} ,action)=>{
 
      switch (action.type) {
        case PRODUCT_DETAILS_REQUEST :
            
            return {
                loading:true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS :
            
            return {
                loading:false,
                product:action.payload,
            }
        case PRODUCT_DETAILS_FAIL :
            
            return {
                loading:false,
                error:action.payload,
            };
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};
export const brandDetailsReducer  = (state = {Brand:{}} ,action)=>{
 
      switch (action.type) {
        case BRAND_DETAILS_REQUEST :
            
            return {
                loading:true,
                ...state
            }
        case BRAND_DETAILS_SUCCESS :
            
            return {
                loading:false,
                brand:action.payload,
            }
        case BRAND_DETAILS_FAIL :
            
            return {
                loading:false,
                error:action.payload,
            };
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};

// Review Reducer
export const newReviewReducer  = (state = {} ,action)=>{
 
      switch (action.type) {
        case NEW_REVIEW_REQUEST :
            
            return {
                ...state,
                loading:true,
            }
        case NEW_REVIEW_SUCCESS :
            
            return {
                loading:false,
                success:action.payload,
            }
        case NEW_REVIEW_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success:false,
            } ;
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};

// Update and  Delete Product
export const productReducer  = (state = {} ,action)=>{
 
      switch (action.type) {
        case DELETE_PRODUCT_REQUEST :
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case DELETE_PRODUCT_SUCCESS :
            return {
                ...state,
                loading:false,
                isDeleted:action.payload,
            }
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                isUpdated:action.payload,
            }
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted:false,
            } ;
        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated:false,
            } ;
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};
// create product
export const newProductReducer  = (state = {product:{}} ,action)=>{
 
      switch (action.type) {
        case NEW_PRODUCT_REQUEST :   
            return {
                ...state,
                loading:true,
            }
        case NEW_PRODUCT_SUCCESS:
            
            return {
                loading:false,
                success:action.payload.success,
                product:action.payload.product
            }
        case NEW_PRODUCT_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case NEW_PRODUCT_RESET:
            return {
                ...state,
                success:false,
            } ;
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};
export const newBrandReducer  = (state = {brand:{}} ,action)=>{
 
      switch (action.type) {
        case NEW_BRAND_REQUEST :   
            return {
                ...state,
                loading:true,
            }
        case NEW_BRAND_SUCCESS:
            
            return {
                loading:false,
                success:action.payload.success,
                brand:action.payload.brand
            }
        case NEW_BRAND_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case NEW_BRAND_RESET:
            return {
                ...state,
                success:false,
            } ;
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};
// Get all product review
export const productReviewReducer  = (state = {reviews:[]} ,action)=>{
 
      switch (action.type) {
        case ALL_REVIEW_REQUEST :   
            return {
                ...state,
                loading:true,
            }
        case ALL_REVIEW_SUCCESS:
            
            return {
                loading:false,
                Reviews:action.payload
            }
        case ALL_REVIEW_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
 
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};
// Delete product review
export const deleteProductReview  = (state = {} ,action)=>{
 
      switch (action.type) {
        case DELETE_REVIEW_REQUEST :   
            return {
                ...state,
                loading:true,
            }
        case DELETE_REVIEW_SUCCESS:
            
            return {
                loading:false,
                isDeleted:action.payload
            }
        case DELETE_REVIEW_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        
            case DELETE_REVIEW_RESET:
                return {
                    ...state,
                    isDeleted:false,
                } ;
            
        
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};

// ADD SHIPPING INFO REDUCER and get shipping info
export const addShippingInfoReducer =  (state={},action) =>{
    switch (action.type) {
        case ADD_SHIPPING_INFO_REQUEST :
        case UPDATE_SHIPPING_INFO_REQUEST:
        case DELETE_SHIPPING_INFO_REQUEST:
                return {
                   ...state,
                   loading:true,
                }
            
        case ADD_SHIPPING_INFO_SUCCESS :
          
                return {
                    loading:false,
                    isAdded:action.payload.success,
                }
        case UPDATE_SHIPPING_INFO_SUCCESS :
          
                return {
                    ...state,
                    loading:false,
                    isUpdated:action.payload.success,
                }
        case DELETE_SHIPPING_INFO_SUCCESS :
          
                return {
                    loading:false,
                    isDeleted:action.payload,
                }
            
        
        case ADD_SHIPPING_INFO_FAIL :
        case UPDATE_SHIPPING_INFO_FAIL:
        case DELETE_SHIPPING_INFO_FAIL:
          
                return {
                    loading:false,
                    error:action.payload,
                }
        case UPDATE_SHIPPING_INFO_RESET:
                return {
                    ...state,
                    isUpdated:false,
                };
        case DELETE_SHIPPING_INFO_RESET:
                return {
                    ...state,
                    isDeleted:false,
                };
        
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                }
    
        default:
            return state;
    }
}
// get Shipping info
export const getShippingInfoReducer =  (state={Address:{}},action) =>{
    switch (action.type) {
        
        case GET_SHIPPING_INFO_REQUEST :   
                return {
                   ...state,
                   loading:true,
                }
        case GET_SHIPPING_INFO_SUCCESS:
          
                return {
                    loading:false,
                    AddressInfo:action.payload
                }
        case GET_SHIPPING_INFO_FAIL :
          
                return {
                    loading:false,
                    error:action.payload,
                }
        
        
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                }
    
        default:
            return state;
    }
}

// get COUPONS info 
export const getCouponsReducer =  (state={coupons:[]},action) =>{
    switch (action.type) {
        
        case GET_COUPONS_REQUEST :   
                return {
                   ...state,
                   loading:true,
                }
        case GET_COUPONS_SUCCESS:
          
                return {
                    loading:false,
                    Coupons:action.payload
                }
        case GET_COUPONS_FAIL :
          
                return {
                    loading:false,
                    error:action.payload,
                }
        
        
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                }
    
        default:
            return state;
    }
}

export const discountReducer = (state = {dproduct:[]} ,action)=>{
 
    switch (action.type) {
      case GET_DISCOUNT_REQUEST:
          return {
              loading:true,
              product:[]
          }
      case GET_DISCOUNT_SUCCESS:
        return {
            loading:false,
            dproduct:action.payload.dproducts
        }
      case GET_DISCOUNT_FAIL:
          return {
              loading:false,
              error:action.error,
          };

      default:
       return state
    }
};