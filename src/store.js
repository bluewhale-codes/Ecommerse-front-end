import {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {  productDetailsReducer, newReviewReducer, adminProductReducer, newProductReducer, productsReducer, productReducer, productReviewReducer, deleteProductReview, addShippingInfoReducer, getShippingInfoReducer, allBrandsReducer, brandProductsReducer, newBrandReducer, brandDetailsReducer, getCouponsReducer,discountReducer } from "./reducers/productReducer";
import { profileReducer, userReducer,loginReducer,update,forgotPasswordReducer, allUserReducer, userDetailReducer } from "./reducers/userReducer"
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";



const reducer = combineReducers({
      products:productsReducer,
      discountProduct:discountReducer,
      brandProducts:brandProductsReducer,
      productDetails:productDetailsReducer,
      brandDetails:brandDetailsReducer,
      user:userReducer,
      profile:profileReducer,
      loginStatus:loginReducer,
      forgotPassword:forgotPasswordReducer,
      cart:cartReducer,
      newOrder:newOrderReducer,
      myOrders:myOrdersReducer,
      orderDetails:orderDetailsReducer,
      newReview:newReviewReducer,
      adminProducts:adminProductReducer,
      newProduct:newProductReducer,
      newBrand:newBrandReducer,
      product:productReducer,
      adminAllOrders:allOrdersReducer,
      adminOrder:orderReducer,
      userDetail:userDetailReducer,
      allUser:allUserReducer,
      productReview:productReviewReducer,
      deleteReview:deleteProductReview,
      shippingInfo:addShippingInfoReducer,
      couponsInfo:getCouponsReducer,
      shippingAddress:getShippingInfoReducer,
      brands:allBrandsReducer,


      

      // registerStatus:registerReducer
})

let initialState ={
      cart:{
           cartItems:localStorage.getItem("cartItems") ?  JSON.parse(localStorage.getItem("cartItems")):[],
           shippingInfo:localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")):{},
           couponInfo:localStorage.getItem("couponInfo") ? JSON.parse(localStorage.getItem("couponInfo")):{},
      }
      
};
const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;