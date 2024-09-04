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

const PaymentA = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

   
   const {shippingInfo,cartItems} = useSelector((state)=>state.cart)
   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
   const shippingData = JSON.parse(sessionStorage.getItem("shippingInfo"));
   const {error} = useSelector((state)=>state.newOrder)
   

   const order = {
      shippingInfo:shippingData,
      orderItems:cartItems,
      paymentInfo:{
        id:"12345",
        status:"success"
    },
      totalMRP:orderInfo.totalmrp,
      shippingPrice:orderInfo.shippingPrice,
      couponDiscount:orderInfo.coupondiscount,
      deliveredAt:orderInfo.DeliveryDate,
      subTotal:orderInfo.totalAmount,
  
    }

   const submitHandlers = (e)=>{
      sessionStorage.setItem("orderInfo",JSON.stringify({}));
      sessionStorage.setItem("shippingInfo",JSON.stringify({}));
      e.preventDefault();
      dispatch(createOrder(order));
      
      navigate("/order/success")
   }

  useEffect(() => {
   if(error){
    alert(error);
    dispatch(clearErrors())
   }
  }, [dispatch,error,alert])

  return (
    <>
    
         <Checkoutsteps activeStep={2}/>
    <div className='payment-container-flex'>
        <div className='flex1'>
           <h2>Choose payment mode</h2>
           <div className='payment-option'>
              <div className='option1'>
                  <div>
                    <h4> <StarBorderIcon/>  Resommended</h4>
                  </div>
                  <p><PaymentsIcon/><span>cash on Delivery</span></p>
                  <p><CreditCardIcon/><span>Credit/Debit card</span></p>
                  <p><AccountBalanceWalletIcon/><span>Phone Pay/Google Pay/UPI</span></p>
                  <p ><AccountBalanceIcon/><span>Net Banking</span></p>
                  <p> <InsertInvitationIcon/><span>EMI pay later</span></p>
                  
              </div>
              <div className='option2'>
                  <h4>Recommended Payment Option</h4>
                  <div className='paymentOption'>
                      <div>
                      <input type='radio'/><span>Cash on Delivery</span>
                      </div>
                      <div>
                         <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1694690471/cG5nLXRyYW5zcGFyZW50LWJyYW5kLWRlc2lnbmVyLWNsb3RoaW5nLWxvZ28tY2FzaC1vbi1kZWxpdmVyeS1hbmdsZS1yZWN0YW5nbGUtZmFzaGlvbi10aHVtYm5haWxfaGp2YXlk/grid_landscape'/>
                      </div>
                  </div>
                  <div className='paymentOption'>
                      <div>
                      <input type='radio'/><span>Google Pay</span>
                      </div>
                      <div>
                         <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1694690337/NzY5LTc2OTI4NzNfZG93bmxvYWQtZ29vZ2xlLXBheS1sb2dvLXBuZ195Y2l1bGg=/grid_landscape'/>
                      </div>
                  </div>
                  <div className='paymentOption'>
                      <div>
                      <input type='radio'/><span>Phone Pay</span>
                      </div>
                      <div>
                         <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1694690472/UGhvbmVQZS1FbWJsZW1famxxd2V1/grid_landscape'/>
                      </div>
                  </div>
                  
                  
                  
              </div>
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
                        <p><b>Toal MRP</b></p>
                        <p className='total-price-tag'><b>₹{shippingInfo.toalMRP}</b></p>
                      </div>
                      <div>
                        <p>Discount on MRP</p>
                        <p id='MRP-discountTag'>-₹{shippingInfo.MRPDiscount}</p>
                      </div>
                      <div>
                        <p>Coupon Discount</p>
                        <p id='coupon-discountTag'>-₹{shippingInfo.couponDiscount}</p>
                      </div>
                      <div>                        
                        <p>Shipping charges</p>
                        <p>₹40</p>
                      </div>
                      
                   
                 </div>
                 <div className='checkout-BTN'>
                 <button onClick={submitHandlers} >Pay - ₹{shippingInfo.totalAmnt}</button>
                 </div>
                 <div className='continue-BTN'>
                   
                 </div>
            </div> 
            
        </div>
    </div>
    </>
  )
  
}

export default PaymentA