import React from 'react'
import Checkoutsteps from './Checkoutsteps';
import {Link , useNavigate} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { Typography } from '@material-ui/core';
import './Shipping.css'
import CloseIcon from '@mui/icons-material/Close';
const ConfirmOrder = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.user)
    const {shippingInfo , cartItems} = useSelector((state)=>state.cart)
    let subtotal = cartItems.reduce(
        (acc,item) => acc + item.quantity * item.price,0
    )
    console.log(subtotal)
    const shippingCharges = subtotal > 1000 ? 0:200;
    const tax =  subtotal * 0.18;
    const totalPrice = subtotal + shippingCharges + tax;
    const address = `${shippingInfo.address},${shippingInfo.city},${shippingInfo.state},${shippingInfo.pinCode},${shippingInfo.country}`
    const proceedToPayment = () => {
        const data = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice,
        };
        sessionStorage.setItem("orderInfo",JSON.stringify(data));
        navigate('/process/payment') 
    }
  return (
   <>
     <Checkoutsteps activeStep={1}/>
     <div className='confirmOrderPage'>
        <div>
           <div className='confirmshippingArea'>
               <Typography>Shpping Info</Typography>
               <div className='confirmshippingAreaBox'>
                  <div>
                     <p>Name:{user.name}</p>
                     <span></span>
                  </div>
                  <div>
                     <p>Phone:</p>
                     <span>{shippingInfo.phoneNo}</span>
                  </div>
                  <div>
                     <p>Address:</p>
                     <span>{address}</span>
                  </div>
               </div>
           </div>
           <div className='confirmCartItems'>
             <Typography>Your Cart Items:</Typography>
             <div className='confirmCartItemsContainer'>
                       {cartItems && (
                           cartItems.map((item)=>(
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
             </div>

           </div>
        </div>
        
        <div>
                  <div className="orderSummary">
                    <Typography>Order Summery</Typography>
                        <div>
                            <div>
                                <p>SubTotal</p>
                                <span>₹{subtotal}</span>
                            </div>
                            <div>
                                <p>Shipping Charges:</p>
                                <span>₹{shippingCharges}</span>
                            </div>
                            <div>
                                <p>GST</p>
                                <span>₹{tax}</span>
                            </div>
                        </div>
                        <div className='orderSummaryTotal'>
                            <p>
                                <b>Total</b>
                            </p>
                            <span>₹{totalPrice}</span>
                        </div>
                        <button onClick={proceedToPayment}>Procced To Payment</button>
                  </div>
        </div>
     </div>
   </>
  )
}

export default ConfirmOrder