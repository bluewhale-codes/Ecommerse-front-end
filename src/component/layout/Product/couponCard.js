import React from 'react'
import './cssFiles/coupon.css'
const CouponCard = () => {
  return (
    <div className='coupon-card'>
            <div id='card-checkbox'> 
                <input  type='checkbox'/>
            </div>
            <div className='coupon-card-detail'>
                <span>FIRSTORDER</span>
                <p><b>Save ₹98</b></p>
                <p>15% off on Your first 3 order</p>
                <p>Expires on:31st of october 2023</p>
            </div>
    </div>   
  )
}

export default CouponCard