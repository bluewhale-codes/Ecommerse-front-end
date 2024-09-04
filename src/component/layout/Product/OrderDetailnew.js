import React from 'react'
import './cssFiles/payment.css'
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { useSelector , useDispatch} from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkoutsteps from './Checkoutsteps';
import { clearErrors,createOrder } from '../../../actions/orderAction';
import {Link , useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

const OrderDetailnew = ({order}) => {
   
  return (
    <>
    
    <Checkoutsteps activeStep={2}/>
    <div className='payment-container-flex'>
        <div className='flex1'>
           <h2>Your f</h2>
           <div className=''>
           {/* <div className='confirmCartItemsContainer'>
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
            </div> */}
              
           </div>
        </div>
        <div className='flex2'>
        <div>
                 <h3>PRICE DETAIL</h3>
                
                 <div className='appy-promo-input'>
                    
                 <p className='delivery-date-txt'>Delivery Date: June 24,2023</p>
                 </div>
                 <div className='delivery-details'>
                    <div className='subtotal'>
                       <p><b>Item Total</b></p>
                       <p><b>{order && order.itemsPrice}</b></p>
                    </div>
                    
                    <div>
                       <p>Deilvery Charge</p>
                       <p>₹{order && order.shippingPrice}</p>
                    </div>
                    <div>
                       <p>Tax</p>
                       <p>₹{order&& order.taxPrice}</p>
                    </div>
                    <div>
                       <p>Payment</p>
                       <p>₹{order && order.totalPrice}</p>
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

export default OrderDetailnew