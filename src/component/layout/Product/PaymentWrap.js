import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Pyament from '../Product/Pyament';

const PaymentWrap = (props) => {
  return (
   <>
     <Elements stripe={loadStripe(props.stripeApiKey)}>
         <Pyament/>
     </Elements>
   </>
  )
}

export default PaymentWrap