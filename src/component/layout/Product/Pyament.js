import React , { useRef } from 'react'
import Checkoutsteps from './Checkoutsteps';
import {Link , useNavigate} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { Typography } from '@material-ui/core';
import './payment.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EventIcon from '@mui/icons-material/Event';
import { CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements } from '@stripe/react-stripe-js';
import axios from 'axios';


// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { clearErrors,createOrder } from '../../../actions/orderAction';
import { useEffect } from 'react';

const Pyament = () => {
  const navigate = useNavigate();
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const paybtn = useRef(null)


  const {shippingInfo,cartItems} = useSelector((state)=>state.cart)
  const {user} = useSelector((state)=>state.user)
  const {error} = useSelector((state)=>state.newOrder)

  const paymentdata={
    amount:Math.round(orderInfo.totalPrice * 100)
  }

  const order = {
    shippingInfo,
    orderItems:cartItems,
    paymentInfo:{
      id:"12345",
      status:"success"
  },
    itemsPrice:orderInfo.subtotal,
    taxPrice:orderInfo.tax,
    shippingPrice:orderInfo.shippingCharges,
    totalPrice:orderInfo.totalPrice,

  }
 
  const submitHandlers = (e)=>{
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
  

  const submitHandlerss = async (e)=>{
        e.preventDefault()
        paybtn.current.disable =true;

        try {
          const config ={
            headers:{
                "Content-Type":"application/json"
            },
          };
          const {data} = await axios.post("/api/v1/payment/process",paymentdata,config);
          const client_secret = data.client_secret
          console.log(client_secret)
          console.log(stripe)
          console.log(elements)
          if(!stripe || !elements){
            console.log('NO NO NoNO')
          };

          const result = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
              card:elements.getElement(CardNumberElement),
              billing_details:{
                name:user.name,
                email:user.email,
                address:{
                  line1:shippingInfo.address,
                  city:shippingInfo.city,
                  state:shippingInfo.state,
                  postal_code:shippingInfo.pinCode,
                  country:shippingInfo.country,

                }
              }

            }
          });

          if(result.error){
           paybtn.current.disable =false;
           alert('Your cart Sukcs!!!')
          }else{
            if(result.paymentIntent.status === "succeeded"){
               navigate("/success")
            }else{
              alert("there are some issue while proccessing payment")
            }
          }
          
        } catch (error) {
           paybtn.current.disable =false;
          
        }
  }
  return (
         
            
            <>
                <Checkoutsteps activeStep={2}/>
                <div className='paymentContainer'>
                    <form className='paymentForm' onSubmit={(e)=>submitHandlers(e)}>
                        <Typography>Card Info</Typography>
                        <div>
                        <CreditCardIcon/>
                        <CardNumberElement className='paymentInput'/>
                        {/* <Elements stripe={loadStripe(stripeApiKey)}>
                        </Elements> */}
                        </div>
                        <div>
                        <VpnKeyIcon/>
                        {/* <Elements stripe={loadStripe(stripeApiKey)}>
                        </Elements> */}
                        <CardCvcElement className='paymentInput'/>
                        </div>
                        <div>
                        <EventIcon/>
                        {/* <Elements stripe={loadStripe(stripeApiKey)}>
                        </Elements> */}
                        <CardExpiryElement className='paymentInput'/>
                        </div>
                        <input
                            type='submit'
                            value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
                            ref={paybtn}
                            className='paymentFormBtn'
                        />
                    </form>
                </div>
            </>
            
  )
}

export default Pyament