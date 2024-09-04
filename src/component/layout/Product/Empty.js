import React from 'react'
import './order.css'
import './cssFiles/myOrder.css'
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
   <div className='emptyCart'>
       <div className='emptyCartImage'>
          <img src='https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg?w=826' />
       </div>
       <div className='empty-cart-footer'>
       <h2>No order Placed yet</h2>
       <p>Don't wait & let Make your first Purchase now</p> 
       <button><Link to='/products'>Cotinue Shopping</Link></button>
       </div>
   </div>
  )
}

export default Empty