import React from 'react'
import './payment.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const OrderSuccess = () => {
    const styleForcheckIcon = {
        width: '96vw',
        height: '20vh',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      };
  return (
      <>
       <div className='order_successContainer'>
        <h1>Your order placed Successfully</h1>
        <div>
        <TaskAltIcon style={styleForcheckIcon}/>
        </div>
        <button>View Order</button>
       </div>
      </>
  )
}

export default OrderSuccess