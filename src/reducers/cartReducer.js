import {ADD_TO_CART,REMOVE_CART_ITEM,SAVE_SHIPPING_INFO,SAVE_COUPON_INFO} from '../constants/cardConstant';

export const cartReducer =(state ={cartItems:[],shippingInfo:{}},action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            
            const Item = action.payload;
            console.log(Item)

            const isItemExist = state.cartItems.find(
                 (i)=> i.product === Item.product
            );
            
            console.log(isItemExist);
            if(isItemExist){
               return {
                    ...state,
                    cartItems:state.cartItems.map((i)=>
                        i.product === isItemExist.product ?Item :i 
                    ),
               };
            }else{
                return {
                    ...state,
                    cartItems:[...state.cartItems,Item] 
                }
            }
        case REMOVE_CART_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter((i)=>i.product !== action.payload),
            }
        case SAVE_SHIPPING_INFO:
            return{
                ...state,
                shippingInfo:action.payload,
            };
        case SAVE_COUPON_INFO:
            return{
                ...state,
                couponInfo:action.payload,
            };
        
    
        default:
          return  state
    }
}