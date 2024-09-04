import React, { useState } from 'react'
import Checkoutsteps from '../layout/Product/Checkoutsteps';
import {Link ,useNavigate , useParams} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { Typography } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Sidebar from './Sidebar';
import { getOrderDetails , updateOrderAdmin } from '../../actions/orderAction';
import { useEffect } from 'react';
import Loader from '../layout/Loaders/loader'
import { UPDATE_ORDERS_RESET } from '../../constants/orderConstant';
import { Button } from '@mui/material';
import './updateorder.css'


const UpdateOrder = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const  [status, setStatus] = useState("");
    const {id} = useParams();
    const {order} = useSelector((state)=>state.orderDetails)
    const {loading, error , isUpdated} = useSelector((state)=>state.adminOrder)


    useEffect(() => {
       dispatch(getOrderDetails(id))

       if(isUpdated){
        navigate('/admin/orders')
        dispatch({type:UPDATE_ORDERS_RESET})
       }
    }, [dispatch,getOrderDetails,id,isUpdated])
    


    // const {user} = useSelector((state)=>state.user)
    
    // let subtotal = cartItems.reduce(
    //     (acc,item) => acc + item.quantity * item.price,0
    // )

    // const shippingCharges = subtotal > 1000 ? 0:200;
    // const tax =  subtotal * 0.18;
    // const totalPrice = subtotal + shippingCharges + tax;
    // const address = `${shippingInfo.address},${shippingInfo.city},${shippingInfo.state},${shippingInfo.pinCode},${shippingInfo.country}`
     const processFormHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("status",status);
        dispatch(updateOrderAdmin(id,myForm))
     }

  return (
   <>
     
    {loading ? <Loader/> :  (<div className='confirmOrderPage'>
        <div>
           <div className='confirmshippingArea'>
               <Typography>Shpping Info</Typography>
               <div className='confirmshippingAreaBox'>
                  <div>
                     <p>Name:{order && order.user.name}</p>
                     <span></span>
                  </div>
                  <div>
                     <p>Phone:</p>
                     <span>{order && order.shippingInfo.phoneNo}</span>
                  </div>
                  <div>
                     <p>Address:</p>
                     <span>{order && order.shippingInfo.address}</span>
                  </div>
               </div>
           </div>
           <div className='confirmCartItems'>
             <Typography>Order Items</Typography>
             <div className='confirmCartItemsContainer'>
                       {order && (
                           order.orderItems.map((item)=>(
                              <div key={item.product}>
                                   <img src={item.image} alt='product'/>
                                   <Link to={`/${item.product}`}>
                                      {item.name}
                                   </Link>{" "}
                                   <span>
                                       {item.quantity} x ₹{item.price}={" "}
                                       <b>₹{item.price * item.quantity}</b>
                                   </span>
                              </div>
                           ))
                       )}
                        <div>

                               <h2>order Status:</h2><h1 className={order && order.orderStatus==="Delivered"? "red" : "green" } >{order && order.orderStatus }</h1>
                        </div>
             </div>

           </div>
        </div>
        
        <div>
                  <div className="orderSummary">
                    <Typography>Process Order</Typography>
                      <div className='processOrderForm'>
                       {order && order.orderStatus !== "Delivered" ?  <form onSubmit={processFormHandler}>
                            
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="">--Choose option--</option>
                                {order && order.orderStatus === "processing" && <option value="Shipped">Shipped</option>}
                                {order && order.orderStatus === "Shipped" && <option value="Delivered">Delivered</option>}
                                <option value="Delivered">OnItsWay</option>
                                <option value="Delivered">Pending</option>
                                <option value="Delivered">cancelled</option>
                                
                            </select>
                           <Button disabled={loading ? true :false || status === "" ? true : false} type='submit'>Process</Button>
                        </form>:(<h1 style={{textAlign:"center"}}>Delivered</h1>)}
                      </div>
                  </div>
        </div>
     </div>)

    }
   </>
  )
}


export default UpdateOrder