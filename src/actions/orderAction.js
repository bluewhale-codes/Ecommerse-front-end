import axios from "axios";
import {CREATE_ORDER_REQUEST,
        CREATE_ORDER_SUCCESS,
        CREATE_ORDER_FAIL,
        CLEAR_ERRORS,
        MY_ORDERS_REQUEST,
        MY_ORDERS_SUCCESS,
        MY_ORDERS_FAIL,
        ORDER_DETAILS_REQUEST,
        ORDER_DETAILS_SUCCESS,
        ORDER_DETAILS_FAIL,
        ALL_ORDERS_REQUEST,
        ALL_ORDERS_SUCCESS,
        ALL_ORDERS_FAIL,
        DELETE_ORDERS_REQUEST,
        DELETE_ORDERS_SUCCESS,
        DELETE_ORDERS_RESET,
        DELETE_ORDERS_FAIL,
        UPDATE_ORDERS_RESET,
        UPDATE_ORDERS_REQUEST,
        UPDATE_ORDERS_SUCCESS,
        UPDATE_ORDERS_FAIL,

} from "../constants/orderConstant"


// Create order
export const createOrder = (order)=> async(dispatch,getState)=>{
    try {
      dispatch({
         type:CREATE_ORDER_REQUEST
      })


     const config = {headers:{"Content-Type":"application/json"}}
     let link  = `/api/v1/order/new`
      const {data} = await axios.post(link,order,config);
 
     dispatch({
         type:CREATE_ORDER_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:CREATE_ORDER_FAIL,
           payload:error.response.data.message
       });
    }
 }


export const myOrders = (orderStatus="")=> async(dispatch)=>{
    try {
      dispatch({
         type:MY_ORDERS_REQUEST
      })

     let link  = `/api/v1/order/me?orderStatus=${orderStatus}`
      const {data} = await axios.get(link);
 
     dispatch({
         type:MY_ORDERS_SUCCESS,
         payload:data.orders,
     })
    } catch (error) {
       dispatch({
           type:MY_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }

// order details
export const getOrderDetails = (id)=> async(dispatch)=>{
    try {
      dispatch({
         type:ORDER_DETAILS_REQUEST
      })

     let link  = `/api/v1/single/order/${id}`
      const {data} = await axios.get(link);
 
     dispatch({
         type:ORDER_DETAILS_SUCCESS,
         payload:data.order,
     })
    } catch (error) {
       dispatch({
           type:ORDER_DETAILS_FAIL,
           payload:error.response.data.message
       });
    }
 }


// ALL ORDERS -- ADMIN
export const allOrdersAdmin = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:ALL_ORDERS_REQUEST
    })

    let link  = "/api/v1/admin/orders/";
    const {data} = await axios.get(link);
 
     dispatch({
         type:ALL_ORDERS_SUCCESS,
         payload:data.orders,
     })
    } catch (error) {
       dispatch({
           type:ALL_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // UPDATE ORDERS status -- ADMIN
export const updateOrderAdmin = (id,order)=> async (dispatch)=>{
    try {
      dispatch({
         type:UPDATE_ORDERS_REQUEST
      })
      const config = {headers:{"Content-Type":"application/json"}}
 
      const {data} = await axios.put(`/api/v1/admin/update/order/${id}`,order,config);
 
     dispatch({
         type:UPDATE_ORDERS_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:UPDATE_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // DELETE ORDERS ---ADMIN
 export const deleteOrderAdmin = (id)=> async (dispatch)=>{
    try {
      dispatch({
         type:DELETE_ORDERS_REQUEST
      })
 
      const {data} = await axios.delete(`/api/v1/order/delete/${id}`);
 
     dispatch({
         type:DELETE_ORDERS_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:DELETE_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }




  
// CLEAR ERRORS
export const clearErrors = ()=> async(dispatch)=>{ 
    dispatch({type:CLEAR_ERRORS})
}

