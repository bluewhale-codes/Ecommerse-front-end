import React , {useEffect} from 'react';
import './payment.css'
import { useSelector , useDispatch} from 'react-redux';
import Checkoutsteps from './Checkoutsteps';
import {Link , useNavigate ,useParams} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import { getOrderDetails , clearErrors } from '../../../actions/orderAction';
import DateObject from "react-date-object";

const OrderDetails = ({order}) => {

   const d = new Date(order.createdAt)

    const date = new DateObject({
        year: d.getFullYear(),
        month: d.getMonth()+1,
        day: d.getDate(),
        hour: d.getHours(),
        minute:d.getMinutes(),
        second: d.getSeconds(),
        milisecond: d.getMilliseconds(),
        format: "DD MMMM YYYY",
      });

    const d2 = new Date(order.deliveredAt)

    const date2 = new DateObject({
        year: d2.getFullYear(),
        month: d2.getMonth()+1,
        day: d2.getDate()-1,
        hour: d2.getHours(),
        minute:d2.getMinutes(),
        second: d2.getSeconds(),
        milisecond: d2.getMilliseconds(),
        format: "DD MMMM YYYY",
      });

//   const {order}  = useSelector((state)=>state.orderDetails);
return (
    <>
    
    <Checkoutsteps activeStep={2}/>
    <div className='payment-container-flex'>
        <div className='flex1'>
           <h2>Your order Details</h2>
           <div className=''>
          <div className='confirmOrdersContainer'>

                
                             {order && (
                                        order.orderItems.map((item)=>(
                                            <div className='order-confirm-detail'>
                                            <div className='image'>
                                            <img src={item.image}/>
                                            <Link to={`/${item.product}`}><p className='order_name'>{item.name}</p></Link>
                                            </div>
                                            <p className='order_price'>₹{item.price}</p>
                                            </div>
                                        ))
                           )} 
            </div>
              
           </div>
        </div>
        <div className='flex2'>
        <div>
                 <h3>PRICE DETAIL</h3>
                
                 <div className='appy-promo-input'>
                    
                 <p className='delivery-date-txt'>Delivery Date: {date2.format()}</p>
                 </div>
                 <div className='delivery-details'>
                   
                    
                    <div>
                       <p>Deilvery Charge</p>
                       <p>₹{order && order.shippingPrice}</p>
                    </div>
                   
                    <div>
                       <p>Payment</p>
                       <p><b>₹{order && order.subTotal}</b></p>
                    </div>
                   
                 </div>
                 <div className='checkout-BTN'>
                 <button>Cancel Order</button>
                 </div>
                 <div className='continue-BTN'>
                   
                 </div>
            </div> 
            
        </div>
    </div>
    </>
  )
}

export default OrderDetails